var gulp=require("gulp");

gulp.task("copy-html",function(){
		//copy-MeiTuanIndex
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan"))
})
//gulp.task("watchall",function(){
//	gulp.watch("MeiTuanIndex.html",["copy-html"])
//})

//gulp.task("copyallfile1",function(){
//	gulp.src("Sass/**/*")
//	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\Sass"))
//})
gulp.task("copyallfile2",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\font"))
})
gulp.task("copyallfile3",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\js"))
})
gulp.task("copyallfile4",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\img"))
})

gulp.task("watchall",function(){
	gulp.watch(["*.html","font/**/*","js/**/*","img/**/*"],["copy-html","copyallfile2","copyallfile3","copyallfile4"])
})















