function fun1( v) {
    var a,b;
    a=document.getElementById(v).value;

    b=document.getElementById('demo1');
    b.value=b.value+a;
}
function getstring(){
    var a,i,n1,op,n2;
    i=0;
    n1="";
    n2="";
    op="";
    a=document.getElementById('demo1').value;
    
    if(a[0]=='.')
    {
        a='0'+a;
    }
    while(i<a.length)
    {
        if(a.charAt(i)!='+' && a.charAt(i)!='-' && a.charAt(i)!='*' && a.charAt(i)!='/')
        {n1=n1+a[i];
        i=i+1;}
        else{
            break;
        }
    }
    n2=a.slice(i+1,a.length);

    if(a[i]=='+')
        document.getElementById('demo').value=Number(n1)+Number(n2);
    else if(a[i]=='-')
        document.getElementById('demo').value=Number(n1)-Number(n2);
    else if(a[i]=='*')
        document.getElementById('demo').value=Number(n1)*Number(n2);
    else if(a[i]=='/')
        document.getElementById('demo').value=Number(n1)/Number(n2);


}
function reset() {
    document.getElementById('demo1').value=null;
}
