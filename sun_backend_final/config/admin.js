module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f94ecceedbfecca56712f9aabb606838'),
  },
});
