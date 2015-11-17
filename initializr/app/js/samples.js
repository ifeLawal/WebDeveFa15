!function(W,libName){
	var ctx = new (W.AudioContext||W.webkitAudioContext), buffers = {},
	loadSampleIntoBuffer = function(key, arrayBuffer, cb){
		ctx.decodeAudioData(arrayBuffer, function(b){
			buffers[key] = {};
			buffers[key].data = b;
			buffers[key].loop = false;
			if(cb) cb(key)
		}, function(e){console.error('Audio decoding error: ' + e.err)}
	)},
	loadSample = function(key, urlOrFile, cb, r){
		if(urlOrFile.big) {
			r = new XMLHttpRequest();
			r.open('GET',urlOrFile,true);
			r.responseType = 'arraybuffer';
			r.onload = function(){loadSampleIntoBuffer(key, r.response, cb)};
			r.send()
		}
		else {
			r = new FileReader();
			r.onload = function(){loadSampleIntoBuffer(key, r.result, cb)};
			r.readAsArrayBuffer(urlOrFile);
		}
	},
	unloadSample = function(key){delete buffers[key]},
	startSample = function(key, bufSrc){
		if(key in buffers) {
			if('node' in buffers[key]) buffers[key].node.stop(0);
			bufSrc = ctx.createBufferSource();
			bufSrc.buffer = buffers[key].data;
			bufSrc.connect(ctx.destination);
			bufSrc.loop = buffers[key].loop;
			bufSrc.start(0)
			buffers[key].node = bufSrc;
		}
	},
	stopSample = function(key){if(key in buffers && buffers[key].node) buffers[key].node.stop(0)};
	W[libName] = {
		setLooping:function(key, value){
			value = (value === undefined) ? true : !!value;
			if(key === null) for(key in buffers) buffers[key].loop = value;
			else if(key in buffers) buffers[key].loop = value
		},
		load:loadSample,
		unload:unloadSample,
		start:startSample,
		stop:stopSample	
	}
}(self,'samples')