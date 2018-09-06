var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin')
var browserSync = require('browser-sync');
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");


// configuraciòn BrowserSync


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



// Compilar el sass en CSS y autoinyecta en los navegadores
gulp.task('sass', function() {
    return gulp.src('*.scss')
        .pipe(plumber({handleError: errorAlertCSS}))
        .pipe(sass({
            'outputStyle': 'compressed'
        }))
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        //.on("error", errorAlertCSS)
        .pipe(gulp.dest('assets/css/'))
        /*.pipe(notify({
            message: 'Css completado y sin errores'
        }))*/
        .pipe(browserSync.stream());
});


// optimiza las imagenes
gulp.task('images', function() {
    gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img/'));
});


// minificador de javascript
gulp.task('javascript', function() {
    gulp.src('assets/js/*.js')
        .pipe(plumber({handleError: errorAlertJS}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/dist'));
});


// gulp

gulp.task('default', ['sass', 'images', 'javascript', 'browser-sync'], function() {
    gulp.watch("**/*.scss", ['sass']);
    gulp.watch("assets/js/*.js", ['javascript']);
});




function errorAlertJS(error) {
    //Aquí configuramos el título y subtítulo del mensaje de error, también el sonido.
    notify.onError({
        title: "Gulp JavaScript",
        subtitle: "Algo esta mal en tu JavaScript!",
        sound: "Basso"
    })(error);
    //También podemos pintar el error en el terminal
    console.log(error.toString());
    this.emit("end");
};

function errorAlertCSS(error) {
    //Aquí configuramos el título y subtítulo del mensaje de error, también el sonido.
    notify.onError({
        title: "Gulp CSS",
        subtitle: "Algo esta mal en tu CSS!",
        sound: "Basso"
    })(error);
    //También podemos pintar el error en el terminal
    console.log(error.toString());
    this.emit("end");
};
