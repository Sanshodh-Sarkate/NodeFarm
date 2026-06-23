

// Blocking-task  FS  using Sync 
const  fsModule  =  require('fs');
const http  = require('http');
const { json } = require('stream/consumers');
const url  =   require('url');
const replaceTemplate = require('./modules/replaceTemplate')
const slugify =  require('slugify');


// const textIn =  fsModule.readFileSync('./txt/input.txt' , 'utf-8');
// const textOut  = `This is What i know about the Avaocado: ${textIn}. \nCreated On: ${Date.now()}`;
// console.log(textOut);

// fsModule.writeFileSync('./txt/output.txt' , textOut);

// console.log("file is createt!");


// Non-Blocking task  FS  called Async 
// console.log('using the non-blocking');

// fsModule.readFile('./txt/start.txt' , 'utf-8' ,  (err ,  data1) => {
//     if(err) return console.log('Error!');
    

//     fsModule.readFile(`./txt/${data1}` , 'utf-8' ,  (err ,  data2) => {
//     console.log(data2);

//       fsModule.readFile(`./txt/append.txt` , 'utf-8' ,  (err ,  data3) => {
//       console.log(data3);

//        fsModule.writeFile('./final/final.txt' ,  `${data2}\n ${data3}` , 'utf-8' , (err)=>{
//              console.log("data is  added successfully!");
//        })
    
// });
    
// });
    
// });

// console.log("hello  async")



const templateOverview = fsModule.readFileSync(`${__dirname}/templates/template-overview.html` , 'utf-8' );
const  templateCard =   fsModule.readFileSync(`${__dirname}/templates/template-card.html` , 'utf-8');
const  templateProduct =   fsModule.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');





const data  = fsModule.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8' );
const dataObj =  JSON.parse(data);

const slug  = dataObj.map(el => slugify(el.productName , { lower: true }));
console.log(slug);


const server = http.createServer((req , res)=>{
    // const pathname = req.url;
    const {pathname , query} =   url.parse(req.url ,  true  )
    //overview page
    if(pathname == '/' || pathname == '/overview'){
        res.writeHead(200 ,{
            'Content-type' : 'text/html'
        });

    const  cardHtml = dataObj.map(el =>  replaceTemplate(templateCard , el)).join('');
    const output =  templateOverview.replace('{%PRODUCT_CARDS%}', cardHtml) ;

    res.end(output);
        
    }

    //product page
    else if( pathname == '/product'){
        console.log(query);
        console.log(query.id);
        const product  =  dataObj[query.id];
        const output  =  replaceTemplate(templateProduct ,  product);
        res.end(output);

    }else if(pathname == '/api'){
        
            res.writeHead(200 , {
                'content-type': 'application/json'
            });
            res.end(data);
            
    }
    
    else{
        res.writeHead(404 ,{
            'Content-type' : 'text/html'
        });
        res.end('<h1>Page not found<h1>');
    }
    
    
    
});

server.listen(8000 ,'127.0.0.1', ()=>{

console.log('server is running on the 8000 on port');

})

