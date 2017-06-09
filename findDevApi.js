var fs = require('fs');
var readline = require('readline');

var biz = 'biz/';
fs.readdir(biz, function(err, files){
    if(err) throw err;
    var len = files.length;
    for(var i = 0; i < len; i ++) {
        (function(arg){
            var dir = biz + files[arg] + '/';
            if(files[arg] == '.DS_Store') return;
            else {
                fs.readdir(dir, function(error, subfiles) {
                    if(error) throw error;
                    // replace biz目录下每个模块目录下js文件
                    var sublen = subfiles.length;
                    for(var j = 0; j < sublen; j ++) {
                        (function(args) {
                            var filename = dir + subfiles[args];
                            replaceApi(filename);
                        })(j);
                    }
                })
            }
        })(i);
    }
});

function replaceApi(filename) {
	var fRead = fs.createReadStream(filename);

	var objReadline = readline.createInterface({  
	    input: fRead,    
	    terminal: true  
	}); 

	var index = 1; 

	objReadline.on('line', (line)=>{  
	    var reg1 = /(http:\/\/[a-zA-Z\.]+)*\/([a-zA-Z]+_)*dev_api(\/[a-zA-Z]+)+/;
        var reg2 = /^\s*\/\/*/;
        // console.log(line);
        if(reg2.test(line)) {
            
        }
        else if(reg1.test(line)) {
            console.log(filename, index, line);
        }
        else {}
        index = index + 1;          
	});   
}