var express = require('express');
var app = express();

app.set("view engine", "ejs")

app.use('/public', express.static('public'));
app.use('/JS', express.static('JS'));
app.get('/', function(reg, res){
    res.render("index");
});

app.get('/calc_id1', function(reg, res){
    res.render("calc_id1");
});

// app.get('/news/:id', function(reg, res){
//     var obj = {title: "Новости", id: 4, paragraphs: ["Параграф", "text ", "number: 2,4,6,", 99] };
//     res.render("news", {newsId: reg.params.id, newParam: 234, obj: obj});
// });

app.listen(3000);