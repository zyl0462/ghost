let method = $request.method;

if(method == 'GET'){
    let new_url = $request.url;
    if(new_url.indexOf('vip=false') != -1){
        new_url = new_url.replace('vip=false','vip=true');
        $done({url:new_url});
    }else{
        $done({});
    }
}else{
    let new_body = $request.body;
    if(new_body.indexOf('vip=false') != -1){
        new_body = new_body.replace('vip=false','vip=true');
        $done({ body:new_body});
    }else{
        $done({});
    }
}
