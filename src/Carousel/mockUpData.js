const mockUpData = [
  {
    title: 'First Block',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Cocker_spaniel_called_Tony.jpg/220px-Cocker_spaniel_called_Tony.jpg',
        id: 'block-0-img-0',
        width: 220,
        height: 330,
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Cocker_spaniel_angielski_zloty_photoshop.jpg',
        id: 'block-0-img-1',
        width: 1968,
        height: 1812,
      },
      {
        url: 'https://as1.ftcdn.net/v2/jpg/03/17/22/44/1000_F_317224472_2AQtscnMpjIJlMZ8u5VAgObsT8O9fh7Y.jpg',
        id: 'block-0-img-2',
        width: 667,
        height: 1000,
      },
    ],
  },
  {
    title: 'Second Block',
    images: [
      {
        url: 'https://thumbs.dreamstime.com/b/cachorro-perro-lindo-vertical-un-con-ojos-grandes-est%C3%A1-mirando-hacia-arriba-en-formato-de-imagen-218459734.jpg',
        id: 'block-1-img-0',
        width: 800,
        height: 838,
      },
      {
        url: 'https://img.freepik.com/free-photo/vertical-shot-lovely-french-bulldog-puppy-sitting-white_181624-46277.jpg?size=338&ext=jpg',
        id: 'block-1-img-1',
        width: 253,
        height: 338,
      },
    ],
  },
  {
    title: 'Third Block',
    images: [
      {
        url: 'https://img.freepik.com/free-photo/beautiful-portrait-tricolor-beagle-puppy-staring-camera-with-perfect-gaze-yellow-background-vertical-image_395373-131.jpg?size=338&ext=jpg',
        id: 'block-2-img-0',
        width: 225,
        height: 338,
      },
      {
        url: 'https://us.123rf.com/450wm/glenkar/glenkar1401/glenkar140100014/25295330-perrito-y-tulipanes-amarillos-vertical-estudio.jpg?ver=6',
        id: 'block-2-img-1',
        width: 344,
        height: 450,
      },
      {
        url: 'https://i.pinimg.com/200x/44/12/fe/4412fe80bb9186af6eaf5cda37b6aa27.jpg',
        id: 'block-2-img-2',
        width: 200,
        height: 280,
      },
      {
        url: 'https://npr.brightspotcdn.com/dims4/default/17315a5/2147483647/strip/true/crop/600x544+0+0/resize/880x798!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fradiowest%2Ffiles%2F201311%2Fdog.jpg',
        id: 'block-2-img-3',
        width: 880,
        height: 798,
      },
    ],
  },
  {
    title: 'Fourth Block',
    images: [
      {
        url: 'https://st.depositphotos.com/1004037/1267/i/600/depositphotos_12671512-stock-photo-a-tricolor-border-collie-puppy.jpg',
        id: 'block-3-img-0',
        width: 399,
        height: 600,
      },
      {
        url: 'https://i0.wp.com/lanoticia.com/wp-content/uploads/2020/07/puppy-dog.jpg?ssl=1',
        id: 'block-3-img-1',
        width: 910,
        height: 1260,
      },
      {
        url: 'https://us.123rf.com/450wm/blanscape/blanscape1706/blanscape170600138/80708303-la-cabeza-de-perro-de-perrito-marr%C3%B3n-feliz-del-labrador-retriever-tir%C3%B3-con-el-bokeh-colorido-del-fol.jpg?ver=6',
        id: 'block-3-img-2',
        width: 337,
        height: 450,
      },
    ],
  },
  {
    title: 'Fifth Block',
    images: [
      {
        url: 'https://w0.peakpx.com/wallpaper/176/295/HD-wallpaper-labrador-retriever-sit-adult-animals-black-canis-lupus-familiaris-dog-dog-breed-labrador-retriever-vertical.jpg',
        id: 'block-4-img-0',
        width: 220,
        height: 330,
      },
      {
        url: 'https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=460,height=600,fit=cover/animal/breed/pictures/61cdd82c1ad1a326747653.jpg',
        id: 'block-3-img-1',
        width: 460,
        height: 600,
      },
    ],
  },
  {
    title: 'Sixth Block',
    images: [
      {
        url: 'https://cdn2.melodijolola.com/media/files/field/image/2020/02/winnie5.jpg',
        id: 'block-5-img-0',
        width: 720,
        height: 722,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7JiQl7z_ZQMAaqJMwLR2GJdj6flLAus3ULy-jIxCFpwQFHnNZcmN2FEG301ziBsH7k0&usqp=CAU',
        id: 'block-5-img-1',
        width: 729,
        height: 598,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsOKaC_7lvBPpMfYAxBTlw576CFo09VlcNw&usqp=CAU',
        id: 'block-5-img-2',
        width: 700,
        height: 682,
      },
    ],
  },
  {
    title: 'Seventh Block',
    images: [
      {
        url: 'https://cdn2.melodijolola.com/media/files/field/image/2020/02/winnie5.jpg',
        id: 'block-6-img-0',
        width: 720,
        height: 722,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7JiQl7z_ZQMAaqJMwLR2GJdj6flLAus3ULy-jIxCFpwQFHnNZcmN2FEG301ziBsH7k0&usqp=CAU',
        id: 'block-6-img-1',
        width: 729,
        height: 598,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsOKaC_7lvBPpMfYAxBTlw576CFo09VlcNw&usqp=CAU',
        id: 'block-6-img-2',
        width: 700,
        height: 682,
      },
    ],
  },
  {
    title: 'Eigth Block',
    images: [
      {
        url: 'https://thumbs.dreamstime.com/b/cachorro-perro-lindo-vertical-un-con-ojos-grandes-est%C3%A1-mirando-hacia-arriba-en-formato-de-imagen-218459734.jpg',
        id: 'block-7-img-0',
        width: 800,
        height: 838,
      },
      {
        url: 'https://img.freepik.com/free-photo/vertical-shot-lovely-french-bulldog-puppy-sitting-white_181624-46277.jpg?size=338&ext=jpg',
        id: 'block-7-img-1',
        width: 253,
        height: 338,
      },
    ],
  },
];

export default mockUpData;
