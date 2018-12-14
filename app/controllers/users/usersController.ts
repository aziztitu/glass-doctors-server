import { Router } from 'express';
import { UserModel, UserRole, User } from '../../models/user';

export const usersController: Router = Router();

usersController.get('/', (req, res) => {
  UserModel.find({}, 'username name role', (err, users) => {
      if (err) {
          console.log('Error retrieving users!');
      }

      res.send({
          success: !err,
          users: users,
      });
  }).sort({ _id: 1 });
});

usersController.post('/', (req, res) => {
  const newUserModel = new UserModel({
      username: req.body.username,
      name: req.body.name,
      role: UserRole.USER,
  } as User);

  newUserModel.save(err => {
      if (err) {
          console.log('Error creating the user!');

          res.send({
              success: false,
              message: 'Cannot create the user',
          });
      } else {
          res.send({
              success: true,
              message: 'User created successfully',
          });
      }
  });
});
