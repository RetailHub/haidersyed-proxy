require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT = 3005;

const app = express();

app.use(express.static(path.join(__dirname, '/../public/')));

// const singleItemProxy = createProxyMiddleware({target: 'http://3.132.5.204:3001', changeOrigin: true});
const itemDetailsProxy = createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true});
// const relatedItemsProxy = createProxyMiddleware({target: 'http://54.166.182.193:3003', changeOrigin: true});
// const reviewsProxy = createProxyMiddleware({target: 'http://18.212.184.37:3004', changeOrigin: true});

// app.use('/api/items/:id', singleItemProxy);
app.use('/items/:id', itemDetailsProxy);
app.use('/items/', itemDetailsProxy);
// app.use('/api/related_products/:id', relatedItemsProxy);
// app.use('/api/allreviews', reviewsProxy);



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
