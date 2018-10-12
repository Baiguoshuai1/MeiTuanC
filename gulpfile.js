var gulp=require("gulp");

gulp.task("copy-index",function(){
		//copy-MeiTuanIndex
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan"))
})
gulp.task("copy-html",function(){
	gulp.src("html/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\html"))
})
gulp.task("copy-font",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\font"))
})
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\js"))
})
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\img"))
})
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\gulpMeiTuan\\php"))
	
})
//复制
gulp.task("build",["copy-index","copy-html","copy-font","copy-js","copy-img","copy-php"])		
//监听
gulp.task("watchall",function(){
	gulp.watch(["*.html","html/**/*","font/**/*","js/**/*","img/**/*","php/**/*"],["copy-index","copy-html","copy-font","copy-js","copy-img","copy-php"])
})















