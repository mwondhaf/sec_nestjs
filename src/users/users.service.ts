import { Injectable } from '@nestjs/common';

// interface User {
//   id: string;
//   name?: string;
//   email: string;
//   password?: string;
// }

@Injectable()
export class UsersService {
  private readonly users: any = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@mail.com',
      password: 'password',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@mail.com',
      password: 'password',
    },
    {
      id: '3',
      name: 'Francis M',
      email: 'mwondhapps@gmail.com',
      password: '',
    },
  ];
  getUsers(): string {
    return 'Users';
  }

  getUser(id: string): string {
    return `User ${id}`;
  }
  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  createUser(): string {
    return 'Create User';
  }

  updateUser(id: string): string {
    return `Update User ${id}`;
  }

  deleteUser(id: string): string {
    return `Delete User ${id}`;
  }

  login(): string {
    return 'Login';
  }

  logout(): string {
    return 'Logout';
  }

  register(): string {
    return 'Register';
  }

  forgotPassword(): string {
    return 'Forgot Password';
  }

  resetPassword(): string {
    return 'Reset Password';
  }

  changePassword(): string {
    return 'Change Password';
  }

  verifyEmail(): string {
    return 'Verify Email';
  }

  resendVerificationEmail(): string {
    return 'Resend Verification Email';
  }
}
