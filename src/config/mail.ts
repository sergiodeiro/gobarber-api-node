interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'email que tiver configurado na amazon ses',
      name: 'Nome que aparecerá na mensagem que será enviada',
    },
  },
} as IMailConfig;
