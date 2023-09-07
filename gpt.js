let method = $request.method;

if(method == 'GET'){
    $done({url:$request.url.replace('vip=false','vip=true')});
}else{
    $done({ body:$request.body.replace('vip=false','vip=true')});
}
