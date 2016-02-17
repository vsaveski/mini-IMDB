var connect = require( ' connect' ) ,
path = require( ' path' ) ,
//routes = require( ' . /routes' ) ,
exphbs = require( ' express3- handlebars' ) ;
module. exports = function( app) {
// configuration code…
app. engine( ' handlebars' , exphbs. create( {
defaultLayout: ' main' ,
layoutsDir: app. get( ' views' ) + ' /layouts' ,
partialsDir: [app. get( ' views' ) + ' /partials' ]
}) . engine) ;
app. set( ' view engine' , ' handlebars' ) ;

app. use( connect. logger( ' dev' ) ) ;
app. use( connect. bodyParser( {
uploadDir: path. j oin( __dirname, ' . . /public/upload/temp' )
}) ) ;
app. use( connect. j son( ) ) ;
app. use( connect. urlencoded( ) ) ;
app. use( connect. methodOverride( ) ) ;
app. use( connect. cookieParser( ' some- secret- value- here' ) ) ;
app. use( app. router) ;
app. use( ' /public/' , connect. static( path. j oin( __dirname, ' . . /public' ) ) ) ;
if ( ' development' === app. get( ' env' ) ) {
app. use( connect. errorHandler( ) ) ;
}

return app;
};