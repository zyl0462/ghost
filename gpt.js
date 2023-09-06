let method = $request.method;

if(method == 'GET'){
    let new_url =  $request.url.replace('vip=false','vip=true');
    $done({url:new_url});
}else{
    let new_body = $request.body.replace('vip=false','vip=true');
    $done({ body:new_body});
}
