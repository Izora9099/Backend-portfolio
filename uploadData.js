// Select the database to use.
use('ReactBackendProject')
db.getCollection('projects').insertMany([
  {
    image: 'https://imgur.com/LCwC3u8',
       title: 'Bronze skin girl digital art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Captivating digital art tailor made for your satisfaction'

  },
  {
    image:
      'https://imgur.com/ougHNne',
          title: 'Cool girl digital art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Breathtaking creaticity ready for you!'

  },
  {
    image:'https://imgur.com/WOdctFd',
      title: 'Pretty Girl',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'You choose how you want the painting to look by yourself, the effects and every other thing'
   
  },
  {
    image:'https://imgur.com/tThyNS6',
    title: 'Digital Art for home decor',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Transform your space with captivating digital art of yourself and loved ones'
   
  },
  {
    image:
      'https://imgur.com/BPlmAqq',
       title: 'Digital Art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Art of celebrities, public figures'
   
  },
  {
    image:
      'https://imgur.com/ZRCgRUn',
       title: 'Digital Art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Art style not limited to modern design'
   
  }
])
/*
// Insert a few documents into the PortfolioData collection.
 db.getCollection('testimonials').insertMany(
 [
         {
           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
           name: 'James Brown',
           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
         },

         {
           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
           name: 'Tina Snow ',
           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
         },
         {
           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
           name: 'Kevin Roussel',
           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
         },
         {
           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
           name: 'Louisa McBrown',
           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
         },
       ]
 );
*/