
let myTitle = document.querySelector('.title');
myTitle.textContent = 'Hello World!'




let myImage = document.querySelector('img')
let mySrc = myImage.src;
myImage.onclick = () =>{

    let mySrc2 = myImage.src;
    let imgOne = 'img/ric.jpg';
    let imgTwo = 'img/ric1.jpg';


}
let i=0;
let imgs= new Array('img/&Изображение2.jpg','img/&Изображение3.jpg','img/&Изображение3.jpg','img/&Изображение4.jpg', 'img/&Изображение5.jpg','img/&Изображение6.jpg',
    'img/&Изображение6.jpg','img/&Изображение7.jpg','img/&Изображение8.jpg','img/&Изображение9.jpg','img/&Изображение10.jpg','img/&Изображение11.jpg','img/&Изображение12.jpg','img/&Изображение13.jpg',
    'img/&Изображение14.jpg', 'img/&Изображение15.jpg', 'img/&Изображение16.jpg', 'img/&Изображение17.jpg',  'img/&Изображение18.jpg', 'img/&Изображение19.jpg','img/&Изображение20.jpg',
    'img/&Изображение21.jpg', 'img/&Изображение22.jpg',  'img/&Изображение23.jpg','img/&Изображение24.jpg','img/&Изображение25.jpg','img/&Изображение26.jpg','img/&Изображение27.jpg',
    'img/&Изображение28.jpg', 'img/&Изображение29.jpg')
let j=imgs.length;
 imgsrc = () =>{
    if (i!=(j-1)){
        {i++;}
        myImage.src=imgs[i];
    }else{
        i = 0;
    }


}

myImage.onclick = ()=>{
    setInterval(imgsrc, 150);
}