// Select the database to use.
use('ReactFrontendProject')
//need to modify the code to match my hardcoded stuff, but i no know how i'ma do it
// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany([
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfyq2a2-e3091c39-bfd0-42c1-b109-dccf9427531e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ5cTJhMi1lMzA5MWMzOS1iZmQwLTQyYzEtYjEwOS1kY2NmOTQyNzUzMWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9oegeMV_tJHnX5vU0lHi1P0s2yTagbgfqYHNuMNQgFA',
    title: 'Bronze skin girl digital art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Captivating digital art tailor made for your satisfaction'

  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfyff7c-ce121545-978f-4932-950b-6db61d33e0ff.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ5ZmY3Yy1jZTEyMTU0NS05NzhmLTQ5MzItOTUwYi02ZGI2MWQzM2UwZmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xonKRzBf8AbiDKy9ct94_6zTZwjK0-yv6tDEFPpDXD0',
    title: 'Cool girl digital art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Breathtaking creaticity ready for you!'

  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfy8say-1b8a94e8-97f9-402d-ab7c-1692fc34be3f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ5OHNheS0xYjhhOTRlOC05N2Y5LTQwMmQtYWI3Yy0xNjkyZmMzNGJlM2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vqjsbE6shFJGvkenZ4EVi837DiRN-0DHvTH6W5FVy9A',
    title: 'Pretty Girl',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'You choose the parameters for the painting yourself'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwtz32-c64c7499-b833-4fab-98fc-9fccaa44cabb.jpg/v1/fill/w_1092,h_732,q_70,strp/digital_art_display_of_african_princess_by_izoraquinn_dfwtz32-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0MCIsInBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ3dHozMi1jNjRjNzQ5OS1iODMzLTRmYWItOThmYy05ZmNjYWE0NGNhYmIuanBnIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.W91ZO54kAFIHsqUmYMUTVjJpy30Mx2AA4Qr08ZYrPzc',
    title: 'Digital Art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwr6c6-bb5fd8cf-a276-4ed0-8bb9-6e22ce66167a.jpg/v1/fill/w_894,h_894,q_70,strp/digital_art_of_handsome_male_by_izoraquinn_dfwr6c6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ3cjZjNi1iYjVmZDhjZi1hMjc2LTRlZDAtOGJiOS02ZTIyY2U2NjE2N2EuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QRqPtOx996NXxEb9opIqRn8WNj1loB0LvsJhZ0z-QWg',
    title: 'Digital Art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwr7gj-dec49d1d-0c71-4e35-95fe-5b8eb37b0e42.jpg/v1/fill/w_1095,h_730,q_70,strp/samuel_l_jackson_digital_art__by_izoraquinn_dfwr7gj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMzIiwicGF0aCI6IlwvZlwvYTE4MzUzNjMtMTk3Yy00ZDUzLTgwZGEtNDBmZTkyNTFlODk1XC9kZndyN2dqLWRlYzQ5ZDFkLTBjNzEtNGUzNS05NWZlLTViOGViMzdiMGU0Mi5qcGciLCJ3aWR0aCI6Ijw9MTI1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oJXMQ3fS-Dj7jYd9GmoIfBbYAIrG7lhffszTNwY9Hxg',
    title: 'Digital Art',
    seemore: 'https://www.pinterest.com/izoragraphics/',
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwr77v-21220355-b0f3-469e-8bcf-570dd50942fe.jpg/v1/fill/w_1095,h_730,q_70,strp/pastor_dr__w_f_kumuyi_and_wife_digital_art_by_izoraquinn_dfwr77v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODUzIiwicGF0aCI6IlwvZlwvYTE4MzUzNjMtMTk3Yy00ZDUzLTgwZGEtNDBmZTkyNTFlODk1XC9kZndyNzd2LTIxMjIwMzU1LWIwZjMtNDY5ZS04YmNmLTU3MGRkNTA5NDJmZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.j-USO9xdwFZZ0opTIWSLPFsMGxqPAfcjScHcpdt8Cpc',
      seemore: 'https://www.pinterest.com/izoragraphics/',
      title: 'Digital Art',
   
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwr6m9-3d2a3139-bea6-4bc4-a8ae-266f4b9f79af.jpg/v1/fill/w_1000,h_800,q_70,strp/digital_portrait_of_beautiful_lady_by_izoraquinn_dfwr6m9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ3cjZtOS0zZDJhMzEzOS1iZWE2LTRiYzQtYThhZS0yNjZmNGI5Zjc5YWYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s7NMXKtucFj41KgT-JTzhJ2mSwa2_Ide23ZsOfgF5qk',
      seemore: 'https://www.pinterest.com/izoragraphics/',
      title: 'Digital Art',
   
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfxafqx-4d9f86c9-4aa1-4af1-a0a1-3684140d77ad.png/v1/fill/w_1280,h_1920,q_80,strp/digital_art_of_beautiful_african_female_by_izoraquinn_dfxafqx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ4YWZxeC00ZDlmODZjOS00YWExLTRhZjEtYTBhMS0zNjg0MTQwZDc3YWQucG5nIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTE4MzUzNjMtMTk3Yy00ZDUzLTgwZGEtNDBmZTkyNTFlODk1XC9pem9yYXF1aW5uLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.CguSTDJb0UeFivh0bwAEEqWpEvldNYoMSWYZFCfe1gM',
   seemore: 'https://www.pinterest.com/izoragraphics/', title: 'Digital Art',
    
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfxzhfg-607cafec-ce23-4570-995c-085b8d751eb3.png/v1/fill/w_1280,h_1600,q_80,strp/legit_african_beauty_by_izoraquinn_dfxzhfg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ4emhmZy02MDdjYWZlYy1jZTIzLTQ1NzAtOTk1Yy0wODViOGQ3NTFlYjMucG5nIiwiaGVpZ2h0IjoiPD0xNjAwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTE4MzUzNjMtMTk3Yy00ZDUzLTgwZGEtNDBmZTkyNTFlODk1XC9pem9yYXF1aW5uLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.x-yXL11WtyPH5cBz6-JcUVQEdp5v4RJd_VbjUqYsFnU',
   seemore: 'https://www.pinterest.com/izoragraphics/', title: 'Digital Art',
    
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfx6c94-547dd5a7-5c4a-44ca-8433-1bd37d90a516.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ4NmM5NC01NDdkZDVhNy01YzRhLTQ0Y2EtODQzMy0xYmQzN2Q5MGE1MTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9IBBMClBv8yd6x4Pi7KXkHlrpzsXC7KINnbvCXfgO6k',
    seemore: 'https://www.pinterest.com/izoragraphics/', title: 'Digital Art',
   
    content: 'Transform your space with captivating digital art'
   
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1835363-197c-4d53-80da-40fe9251e895/dfwtyj3-33d83b2c-10e5-4695-b871-f27d01ad068d.jpg/v1/fill/w_1000,h_800,q_70,strp/gorgeous_black_cinderella_digital_art__by_izoraquinn_dfwtyj3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ExODM1MzYzLTE5N2MtNGQ1My04MGRhLTQwZmU5MjUxZTg5NVwvZGZ3dHlqMy0zM2Q4M2IyYy0xMGU1LTQ2OTUtYjg3MS1mMjdkMDFhZDA2OGQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qh0iGTxy7D_PgOfekhgBvjjmB8x443mrUJeCATpAJBc',
  seemore: 'https://www.pinterest.com/izoragraphics/',   title: 'Digital Art',
   
    content: 'Transform your space with captivating digital art'
   
  }
])

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: 'James Brown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },

//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
//           name: 'Tina Snow ',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//           name: 'Kevin Roussel',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: 'Louisa McBrown',
//           review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
//         },

//       ]
// );