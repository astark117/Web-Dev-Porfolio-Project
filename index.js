'use strict';

const express = require("express");
const app = express();
const PORT = 3000;
const nodemailer = require("nodemailer");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

let htmlTop = `
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Anthony Stark</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
    <header>
        <h1> Anthony Stark <img sizes="192x192" src="apple-touch-icon.png"></h1>
    </header>
    <nav>
        <a href="index.html"> Home </a>
        <a href="gallery.html">Gallery </a>
        <a href="order.html"> Order </a>
        <a href="contact.html">Contact </a>
    </nav>
    <main>
`

let htmlBottom = `
    </main>
    <footer>
        <p>
            &#169; 2024 Anthony Stark
        </p>
    </footer>
</body>
</html>
`

app.post("/output", (req,res) => {
    const person = req.body.firstlast;
    const email = req.body.email;
    const reason = req.body.reason;
    const experience = req.body.experience;
    const improvement = req.body.improvement;
    const more = req.body.more;
    res.send(`
        ${htmlTop}
        <h3> Hello <strong>${person}</strong>, thank you for reaching out. <h3>
        <p> Your feedback: <strong>${reason}</strong> has been noted. I plan to improve the site using your
        suggestions of improving the <strong>${improvement}</strong> and adding more <strong>${more}</strong> in order to
        improve upon your experience, which you described as: <strong>${experience}.</strong> <p>
        <p> I will keep you informed of any updates at <strong>${email}</strong>. <p>
        ${htmlBottom}
    `);
    
    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    // Message object
    let message = {
        from: `${person} <${email}>`,
        to: `${person} <${email}>`,
        subject: 'Form feedback from Anthony Stark',
        html: `<h3> Hello <strong>${person}</strong>, thank you for reaching out. <h3>
        <p> Your feedback: <strong>${reason}</strong> has been noted. I plan to improve the site using your
        suggestions of improving the <strong>${improvement}</strong> and adding more <strong>${more}</strong> in order to
        improve upon your experience, which you described as: <strong>${experience}.</strong> <p>
        <p> I will keep you informed of any updates at <strong>${email}</strong>. </p>`
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
}); 

app.post("/purchase", (req,res) => {
    const person = req.body.firstlast;
    const email = req.body.email;
    const address = req.body.address;
    const instructions = req.body.delivery;
    const quantity = req.body.quantity;
    const product = req.body.product;

    const productlist = require('./products.js').products;

    // compares selected product to array in product.js and selects the correct one
    function compare_product(product, productlist) {
        if (product == 'Spinning Cat Scratcher Ball') {
            return productlist[0]}
        else if (product == 'Foldable Dog Pool') {
            return productlist[1]}
        else if (product == 'Dog Fence Window') {
            return productlist[2]}
        else if (product == 'Capsule Pet Travel Backpack') {
            return productlist[3]}
        else if (product == 'Cat Hamster Wheel') {
            return productlist[4]}
        else {
            return productlist[5]}
    };

    const brand = compare_product(product, productlist).company;

    const formatter = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'});
    const unitprice = formatter.format(compare_product(product, productlist).price);
    const total_price = formatter.format((quantity * compare_product(product, productlist).price));

    res.send(`
        ${htmlTop}
        <h3> Your Order has been Confirmed! <h3>
        <p> Thank you for ordering from us, <strong>${person}</strong>.
            Your purchase of <strong>${quantity}</strong> units of <strong>${brand}</strong>'s <strong>${product}</strong> 
            at <strong>${unitprice}</strong> per unit comes to a total of <strong>${total_price}</strong>.
            This order will be delivered to <strong>${address}</strong> with the following special delivery instructions: <strong>${instructions}</strong>.
        </p>
        ${htmlBottom}
    `);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

