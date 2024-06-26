import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class MailingService {
  private transporter: nodemailer.Transporter;
  // private confirmationTemplate: handlebars.TemplateDelegate;
  // private passwordResetTemplate: handlebars.TemplateDelegate;
  // private groupInviteTemplate: handlebars.TemplateDelegate;

  constructor() {
    // TODO all email settings need to be in an env
    this.transporter = nodemailer.createTransport(
      {
        host: 'server312.web-hosting.com',
        port: 465,
        secure: true,
        auth: {
          user: 'business@yallahuts.com',
          pass: 'Yalla@2020',
        },
      },
      {
        from: {
          name: 'No-reply',
          address: 'business@yallahuts.com',
        },
      },
    );

    // Load Handlebars templates
    // this.confirmationTemplate = this.loadTemplate('confirmation.hbs');
  }

  async sendMagicLink(email: any, content?: string) {
    // const url = `${process.env.CLIENT_URL}?token=${token}`;
    // const html = this.confirmationTemplate({ name: user.firstName, url });

    const info = await this.transporter.sendMail({
      to: email,
      subject: 'Welcome! Click link below to login',
      html: `<p>${content}</p>`,
    });
    return info;
  }
}
