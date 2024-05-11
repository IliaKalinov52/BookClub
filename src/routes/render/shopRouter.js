import express from 'express';
// import jwt from 'jsonwebtoken';
import {
  Box, Cart, User, Order, Order_Items,
} from '../../../db/models';

const shopRouter = express.Router();

shopRouter.get('/', async (req, res) => {
  try {
    const boxes = await Box.findAll();
    console.log(Box);
    return res.render('BoxShop', { boxes });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

shopRouter.get('/cart', async (req, res) => {
  try {
    const { user } = res.locals;
    // const cartContent =
    // (await User.findAll({ where: { id: user.id }, include: { model: Box, through: 'Carts' } }));
    // const cartContent = await Box.findAll({
    //   include: [{
    //     model: User,
    //     where: { id: user.id },
    //   }],
    // });
    const carts = await Cart.findAll({
      where: { userId: user.id },
    });

    const boxIds = carts.map((cart) => cart.boxId);

    const boxesRes = await Promise.all(boxIds.map(async (el) => {
      const obj = await Box.findOne({
        where: { id: el },
      });
      return obj.dataValues;
    }));

    // console.log(boxesRes);
    // const boxes = cartContent[0].Boxes.map((el) => el.dataValues);
    // console.log(boxes);
    res.render('ShoppingCart', { boxesRes });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

shopRouter.post('/checkout', async (req, res) => {
  try {
    const { user } = res.locals;
    const { dataValues } = await Order.create({ userId: user.id, status: 'pending', person: 'Tom Cruise' });
    // console.log('!!!!ORDER:', dataValues);
    const boxes = await Cart.findAll({ where: { userId: user.id } });
    // const boxesData = boxes.map((el) => el.dataValues);
    const orderItemsData = boxes.map((el) => ({
      orderId: dataValues.id,
      boxId: el.dataValues.boxId,
    }));
    // console.log('!!!!!', orderItemsData);
    await Order_Items.bulkCreate(orderItemsData);
    await Cart.destroy({
      where: {
        userId: user.id,
      },
    });
    // console.log('!!!!BOX:', boxesData);
    // await Order_Item.bulkCreate();

    res.sendStatus(200);
  } catch (error) { console.log(error); }
});

shopRouter.delete('/cart/:id', async (req, res) => {
  try {
    // const { refreshToken } = req.cookies;
    // console.log(req.params, user.id, typeof req.params.id, typeof user.id, res.locals);
    const { user } = res.locals;

    await Cart.destroy({ where: { boxId: req.params.id, userId: user.id }, limit: 1 });
    res.sendStatus(200);
  } catch (error) { console.log(error); }
});

shopRouter.post('/:id', async (req, res) => {
  try {
    // const { refreshToken } = req.cookies;
    const { user } = res.locals;
    // console.log(req.params, user.id, typeof req.params.id, typeof user.id, res.locals);
    await Cart.create({
      userId: user.id,
      boxId: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) { console.log(error); }
});

export default shopRouter;
