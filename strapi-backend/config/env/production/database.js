// // path: ./config/database.js

// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         schema: env('DATABASE_SCHEMA', 'public'), // Not required
//         ssl: {
//         //   shalom kohn changed this from orriginal
//             ca: env('DATABASE_CA')
//         },
//       },
//       debug: false,
//     },
//   });

      // path: ./config/env/production/database.js

      module.exports = ({ env }) => ({
        connection: {
          client: 'postgres',
          connection: {
            host: env('DATABASE_HOST'),
            port: env.int('DATABASE_PORT'),
            database: env('DATABASE_NAME'),
            user: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
            ssl: {
              rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
            },
          },
          debug: false,
        },
      });