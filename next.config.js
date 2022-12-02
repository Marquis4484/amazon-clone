module.exports = {
   images: {
      domains: ["links.papareact.com", "fakestoreapi.com"], // whitelisting images for Image Tag
   },

   env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
   },
};
