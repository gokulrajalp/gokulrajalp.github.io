function cgpa ()	{
    var a=(document.getElementById("subject1").value);
    b=(document.getElementById("subject2").value);
    c=(document.getElementById("subject3").value);
    d=(document.getElementById("subject4").value);
    e=(document.getElementById("subject5").value);
    f=(document.getElementById("subject6").value);
    g=(document.getElementById("subject7").value);
    h=(document.getElementById("subject8").value);	
    tot1 = 19;	
if(a=='O'){
        a=10;
    }
    else if(a=='A+'){
        a=9;
    }
    else if(a=='A'){
        a=8;
    }
    else if(a=='B+'){
        a=7;
    }
    else if(a=='B'){
        a=6;
    }
    else if(a=='RA-F'){
        a=0;
        tot1 = tot1 - 3;
    }
if(b=='O'){
        b=10;
    }
    else if(b=='A+'){
        b=9;
    }
    else if(b=='A'){
        b=8;
    }
    else if(b=='B+'){
        b=7;
    }
    else if(b=='B'){
        b=6;
    }
    else if(b=='RA-F'){
        b=0;
        tot1 = tot1 - 4;
    }
if(c=='O'){
        c=10;
    }
    else if(c=='A+'){
        c=9;
    }
    else if(c=='A'){
        c=8;
    }
    else if(c=='B+'){
        c=7;
    }
    else if(c=='B'){
        c=6;
    }
    else if(c=='RA-F'){
        c=0;
        tot1 = tot1 - 3;
    }
if(d=='O'){
        d=10;
    }
    else if(d=='A+'){
        d=9;
    }
    else if(d=='A'){
        d=8;
    }
    else if(d=='B+'){
        d=7;
    }
    else if(d=='B'){
        d=6;
    }
    else if(d=='RA-F'){
        d=0;
        tot1 = tot1 - 3;
    }
if(e=='O'){
        e=10;
    }
    else if(e=='A+'){
        e=9;
    }
    else if(e=='A'){
        e=8;
    }
    else if(e=='B+'){
        e=7;
    }
    else if(e=='B'){
        e=6;
    }
    else if(e=='RA-F'){
        e=0;
        tot1 = tot1 - 3;
    }
if(f=='O'){
        f=10;
    }
    else if(f=='A+'){
        f=9;
    }
    else if(f=='A'){
        f=8;
    }
    else if(f=='B+'){
        f=7;
    }
    else if(f=='B'){
        f=6;
    }
    else if(f=='RA-F'){
        f=0;
        tot1 = tot1 - 1;
    }
if(g=='O'){
        g=10;
    }
    else if(g=='A+'){
        g=9;
    }
    else if(g=='A'){
        g=8;
    }
    else if(g=='B+'){
        g=7;
    }
    else if(g=='B'){
        g=6;
    }
    else if(g=='RA-F'){
        g=0;
        tot1 = tot1 - 1;
    }	
if(h=='O'){
        h=10;
    }
    else if(h=='A+'){
        h=9;
    }
    else if(h=='A'){
        h=8;
    }
    else if(h=='B+'){
        h=7;
    }
    else if(h=='B'){
        h=6;
    }
    else if(h=='RA-F'){
        h=0;
        tot1 = tot1 - 1;
    }
    
    Total1=(3*a)+(4*b)+(3*c)+(3*d)+(3*e)+(1*f)+(1*g)+(1*h);
    Result1=Total1/tot1;
    n1 = Result1.toFixed(3);
    document.getElementById("Result1").innerHTML="SGPA : "+n1;
    document.getElementById("cgpa0").innerHTML="CGPA : "+ n1;
























    var a1=(document.getElementById("subject9").value);
    b1=(document.getElementById("subject10").value);
    c1=(document.getElementById("subject11").value);
    d1=(document.getElementById("subject12").value);
    e1=(document.getElementById("subject13").value);
    f1=(document.getElementById("subject14").value);
    g1=(document.getElementById("subject15").value);	
    tot2 = 18;	
if(a1=='O'){
        a1=10;
    }
    else if(a1=='A+'){
        a1=9;
    }
    else if(a1=='A'){
        a1=8;
    }
    else if(a1=='B+'){
        a1=7;
    }
    else if(a1=='B'){
        a1=6;
    }
    else if(a1=='RA-F'){
        a1=0;
        tot2 = tot2 - 3;
    }
if(b1=='O'){
        b1=10;
    }
    else if(b1=='A+'){
        b1=9;
    }
    else if(b1=='A'){
        b1=8;
    }
    else if(b1=='B+'){
        b1=7;
    }
    else if(b1=='B'){
        b1=6;
    }
    else if(b1=='RA-F'){
        b1=0;
        tot2 = tot2 - 4;
    }
if(c1=='O'){
        c1=10;
    }
    else if(c1=='A+'){
        c1=9;
    }
    else if(c1=='A'){
        c1=8;
    }
    else if(c1=='B+'){
        c1=7;
    }
    else if(c1=='B'){
        c1=6;
    }
    else if(c1=='RA-F'){
        c1=0;
        tot2 = tot2 - 3;
    }
if(d1=='O'){
        d1=10;
    }
    else if(d1=='A+'){
        d1=9;
    }
    else if(d1=='A'){
        d1=8;
    }
    else if(d1=='B+'){
        d1=7;
    }
    else if(d1=='B'){
        d1=6;
    }
    else if(d1=='RA-F'){
        d1=0;
        tot2 = tot2 - 3;
    }
if(e1=='O'){
        e1=10;
    }
    else if(e1=='A+'){
        e1=9;
    }
    else if(e1=='A'){
        e1=8;
    }
    else if(e1=='B+'){
        e1=7;
    }
    else if(e1=='B'){
        e1=6;
    }
    else if(e1=='RA-F'){
        e1=0;
        tot2 = tot2 - 3;
    }
if(f1=='O'){
        f1=10;
    }
    else if(f1=='A+'){
        f1=9;
    }
    else if(f1=='A'){
        f1=8;
    }
    else if(f1=='B+'){
        f1=7;
    }
    else if(f1=='B'){
        f1=6;
    }
    else if(f1=='RA-F'){
        f1=0;
        tot2 = tot2 - 1;
    }
if(g1=='O'){
        g1=10;
    }
    else if(g1=='A+'){
        g1=9;
    }
    else if(g1=='A'){
        g1=8;
    }
    else if(g1=='B+'){
        g1=7;
    }
    else if(g1=='B'){
        g1=6;
    }
    else if(g1=='RA-F'){
        g1=0;
        tot2 = tot2 - 1;
    }	

    
    Total2=(3*a1)+(4*b1)+(3*c1)+(3*d1)+(3*e1)+(1*f1)+(1*g1);
    Result2=Total2/tot2;
    n2 = Result2.toFixed(3);
    document.getElementById("Result2").innerHTML="SGPA : "+n2;








var cgpa2;
var sgpa2;
var credit2;

sgpa2 = Total1 + Total2;
credit2 = tot1 + tot2;

cgpa2 = sgpa2/credit2;


out1 = cgpa2.toFixed(3);

document.getElementById("cgpa1").innerHTML="CGPA : "+ out1;









var a2=(document.getElementById("subject16").value);
    b2=(document.getElementById("subject17").value);
    c2=(document.getElementById("subject18").value);
    d2=(document.getElementById("subject19").value);
    e2=(document.getElementById("subject20").value);
    f2=(document.getElementById("subject21").value);
    g2=(document.getElementById("subject22").value);
    h2=(document.getElementById("subject23").value);	
    tot3 = 19;	
if(a2=='O'){
        a2=10;
    }
    else if(a2=='A+'){
        a2=9;
    }
    else if(a2=='A'){
        a2=8;
    }
    else if(a2=='B+'){
        a2=7;
    }
    else if(a2=='B'){
        a2=6;
    }
    else if(a2=='RA-F'){
        a2=0;
        tot3 = tot3 - 3;
    }
if(b2=='O'){
        b2=10;
    }
    else if(b2=='A+'){
        b2=9;
    }
    else if(b2=='A'){
        b2=8;
    }
    else if(b2=='B+'){
        b2=7;
    }
    else if(b2=='B'){
        b2=6;
    }
    else if(b2=='RA-F'){
        b2=0;
        tot3 = tot3 - 4;
    }
if(c2=='O'){
        c2=10;
    }
    else if(c2=='A+'){
        c2=9;
    }
    else if(c2=='A'){
        c2=8;
    }
    else if(c2=='B+'){
        c2=7;
    }
    else if(c2=='B'){
        c2=6;
    }
    else if(c2=='RA-F'){
        c2=0;
        tot3 = tot3 - 1;
    }
if(d2=='O'){
        d2=10;
    }
    else if(d2=='A+'){
        d2=9;
    }
    else if(d2=='A'){
        d2=8;
    }
    else if(d2=='B+'){
        d2=7;
    }
    else if(d2=='B'){
        d2=6;
    }
    else if(d2=='RA-F'){
        d2=0;
        tot3 = tot3 - 3;
    }
if(e2=='O'){
        e2=10;
    }
    else if(e2=='A+'){
        e2=9;
    }
    else if(e2=='A'){
        e2=8;
    }
    else if(e2=='B+'){
        e2=7;
    }
    else if(e2=='B'){
        e2=6;
    }
    else if(e2=='RA-F'){
        e2=0;
        tot3 = tot3 - 3;
    }
if(f2=='O'){
        f2=10;
    }
    else if(f2=='A+'){
        f2=9;
    }
    else if(f2=='A'){
        f2=8;
    }
    else if(f2=='B+'){
        f2=7;
    }
    else if(f2=='B'){
        f2=6;
    }
    else if(f2=='RA-F'){
        f2=0;
        tot3 = tot3 - 3;
    }
if(g2=='O'){
        g2=10;
    }
    else if(g2=='A+'){
        g2=9;
    }
    else if(g2=='A'){
        g2=8;
    }
    else if(g2=='B+'){
        g2=7;
    }
    else if(g2=='B'){
        g2=6;
    }
    else if(g2=='RA-F'){
        g2=0;
        tot3 = tot3 - 1;
    }	
if(h2=='O'){
        h2=10;
    }
    else if(h2=='A+'){
        h2=9;
    }
    else if(h2=='A'){
        h2=8;
    }
    else if(h2=='B+'){
        h2=7;
    }
    else if(h2=='B'){
        h2=6;
    }
    else if(h2=='RA-F'){
        h2=0;
        tot3 = tot3 - 1;
    }
    
    Total3=(3*a2)+(4*b2)+(1*c2)+(3*d2)+(3*e2)+(3*f2)+(1*g2)+(1*h2);
    Result3=Total3/tot3;
    n3 = Result3.toFixed(3);
    document.getElementById("Result3").innerHTML="SGPA : "+n3;













var cgpa3;
var sgpa3;
var credit3;

sgpa3 = Total1 + Total2 + Total3;
credit3 = tot1 + tot2 + tot3;

cgpa3 = sgpa3/credit3;


out2 = cgpa3.toFixed(3);

document.getElementById("cgpa2").innerHTML="CGPA : "+ out2;



















var a3=(document.getElementById("subject24").value);
    b3=(document.getElementById("subject25").value);
    c3=(document.getElementById("subject26").value);
    d3=(document.getElementById("subject27").value);
    e3=(document.getElementById("subject28").value);
    f3=(document.getElementById("subject29").value);
    g3=(document.getElementById("subject30").value);
    h3=(document.getElementById("subject31").value);
    i3=(document.getElementById("subject32").value);	
    tot4 = 23;	
if(a3=='O'){
        a3=10;
    }
    else if(a3=='A+'){
        a3=9;
    }
    else if(a3=='A'){
        a3=8;
    }
    else if(a3=='B+'){
        a3=7;
    }
    else if(a3=='B'){
        a3=6;
    }
    else if(a3=='RA-F'){
        a3=0;
        tot4 = tot4 - 3;
    }
if(b3=='O'){
        b3=10;
    }
    else if(b3=='A+'){
        b3=9;
    }
    else if(b3=='A'){
        b3=8;
    }
    else if(b3=='B+'){
        b3=7;
    }
    else if(b3=='B'){
        b3=6;
    }
    else if(b3=='RA-F'){
        b3=0;
        tot4 = tot4 - 4;
    }
if(c3=='O'){
        c3=10;
    }
    else if(c3=='A+'){
        c3=9;
    }
    else if(c3=='A'){
        c3=8;
    }
    else if(c3=='B+'){
        c3=7;
    }
    else if(c3=='B'){
        c3=6;
    }
    else if(c3=='RA-F'){
        c3=0;
        tot4 = tot4 - 1;
    }
if(d3=='O'){
        d3=10;
    }
    else if(d3=='A+'){
        d3=9;
    }
    else if(d3=='A'){
        d3=8;
    }
    else if(d3=='B+'){
        d3=7;
    }
    else if(d3=='B'){
        d3=6;
    }
    else if(d3=='RA-F'){
        d3=0;
        tot4 = tot4 - 3;
    }
if(e3=='O'){
        e3=10;
    }
    else if(e3=='A+'){
        e3=9;
    }
    else if(e3=='A'){
        e3=8;
    }
    else if(e3=='B+'){
        e3=7;
    }
    else if(e3=='B'){
        e3=6;
    }
    else if(e3=='RA-F'){
        e3=0;
        tot4 = tot4 - 4;
    }
if(f3=='O'){
        f3=10;
    }
    else if(f3=='A+'){
        f3=9;
    }
    else if(f3=='A'){
        f3=8;
    }
    else if(f3=='B+'){
        f3=7;
    }
    else if(f3=='B'){
        f3=6;
    }
    else if(f3=='RA-F'){
        f3=0;
        tot4 = tot4 - 1;
    }
if(g3=='O'){
        g3=10;
    }
    else if(g3=='A+'){
        g3=9;
    }
    else if(g3=='A'){
        g3=8;
    }
    else if(g3=='B+'){
        g3=7;
    }
    else if(g3=='B'){
        g3=6;
    }
    else if(g3=='RA-F'){
        g3=0;
        tot4 = tot4 - 4;
    }	
if(h3=='O'){
        h3=10;
    }
    else if(h3=='A+'){
        h3=9;
    }
    else if(h3=='A'){
        h3=8;
    }
    else if(h3=='B+'){
        h3=7;
    }
    else if(h3=='B'){
        h3=6;
    }
    else if(h3=='RA-F'){
        h3=0;
        tot4 = tot4 - 1;
    }

if(i3=='O'){
        i3=10;
    }
    else if(i3=='A+'){
        i3=9;
    }
    else if(i3=='A'){
        i3=8;
    }
    else if(i3=='B+'){
        i3=7;
    }
    else if(i3=='B'){
        i3=6;
    }
    else if(i3=='RA-F'){
        i3=0;
        tot4 = tot4 - 3;
    }	
    
    Total4=(3*a3)+(3*b3)+(1*c3)+(3*d3)+(4*e3)+(1*f3)+(4*g3)+(1*h3)+(3*i3);
    Result4=Total4/tot4;
    n4 = Result4.toFixed(3);
    document.getElementById("Result4").innerHTML="SGPA : "+n4;












var cgpa4;
var sgpa4;
var credit4;

sgpa4 = Total1 + Total2 + Total3 + Total4;
credit4 = tot1 + tot2 + tot3 + tot4;

cgpa4 = sgpa4/credit4;


out3 = cgpa4.toFixed(3);

document.getElementById("cgpa3").innerHTML="CGPA : "+ out3;

























var a4=(document.getElementById("subject33").value);
    b4=(document.getElementById("subject34").value);
    c4=(document.getElementById("subject35").value);
    d4=(document.getElementById("subject36").value);
    e4=(document.getElementById("subject37").value);
    f4=(document.getElementById("subject38").value);
    g4=(document.getElementById("subject39").value);
    h4=(document.getElementById("subject40").value);
    i4=(document.getElementById("subject41").value);	
    tot5 = 22;	
if(a4=='O'){
        a4=10;
    }
    else if(a4=='A+'){
        a4=9;
    }
    else if(a4=='A'){
        a4=8;
    }
    else if(a4=='B+'){
        a4=7;
    }
    else if(a4=='B'){
        a4=6;
    }
    else if(a4=='RA-F'){
        a4=0;
        tot5 = tot5 - 4;
    }
if(b4=='O'){
        b4=10;
    }
    else if(b4=='A+'){
        b4=9;
    }
    else if(b4=='A'){
        b4=8;
    }
    else if(b4=='B+'){
        b4=7;
    }
    else if(b4=='B'){
        b4=6;
    }
    else if(b4=='RA-F'){
        b4=0;
        tot5 = tot5 - 3;
    }
if(c4=='O'){
        c4=10;
    }
    else if(c4=='A+'){
        c4=9;
    }
    else if(c4=='A'){
        c4=8;
    }
    else if(c4=='B+'){
        c4=7;
    }
    else if(c4=='B'){
        c4=6;
    }
    else if(c4=='RA-F'){
        c4=0;
        tot5 = tot5 - 3;
    }
if(d4=='O'){
        d4=10;
    }
    else if(d4=='A+'){
        d4=9;
    }
    else if(d4=='A'){
        d4=8;
    }
    else if(d4=='B+'){
        d4=7;
    }
    else if(d4=='B'){
        d4=6;
    }
    else if(d4=='RA-F'){
        d4=0;
        tot5 = tot5 - 3;
    }
if(e4=='O'){
        e4=10;
    }
    else if(e4=='A+'){
        e4=9;
    }
    else if(e4=='A'){
        e4=8;
    }
    else if(e4=='B+'){
        e4=7;
    }
    else if(e4=='B'){
        e4=6;
    }
    else if(e4=='RA-F'){
        e4=0;
        tot5 = tot5 - 3;
    }
if(f4=='O'){
        f4=10;
    }
    else if(f4=='A+'){
        f4=9;
    }
    else if(f4=='A'){
        f4=8;
    }
    else if(f4=='B+'){
        f4=7;
    }
    else if(f4=='B'){
        f4=6;
    }
    else if(f4=='RA-F'){
        f4=0;
        tot5 = tot5 - 3;
    }
if(g4=='O'){
        g4=10;
    }
    else if(g4=='A+'){
        g4=9;
    }
    else if(g4=='A'){
        g4=8;
    }
    else if(g4=='B+'){
        g4=7;
    }
    else if(g4=='B'){
        g4=6;
    }
    else if(g4=='RA-F'){
        g4=0;
        tot5 = tot5 - 1;
    }	
if(h4=='O'){
        h4=10;
    }
    else if(h4=='A+'){
        h4=9;
    }
    else if(h4=='A'){
        h4=8;
    }
    else if(h4=='B+'){
        h4=7;
    }
    else if(h4=='B'){
        h4=6;
    }
    else if(h4=='RA-F'){
        h4=0;
        tot5 = tot5 - 1;
    }

if(i4=='O'){
        i4=10;
    }
    else if(i4=='A+'){
        i4=9;
    }
    else if(i4=='A'){
        i4=8;
    }
    else if(i4=='B+'){
        i4=7;
    }
    else if(i4=='B'){
        i4=6;
    }
    else if(i4=='RA-F'){
        i4=0;
        tot5 = tot5 - 1;
    }	
    
    var Total5=(4*a4)+(3*b4)+(3*c4)+(3*d4)+(3*e4)+(3*f4)+(1*g4)+(1*h4)+(1*i4);
    var Result5=Total5/tot5;
    var n5 = Result5.toFixed(3);
    document.getElementById("Result5").innerHTML="SGPA : "+n5;



    var cgpa5;
    var sgpa5;
    var credit5;
    
    sgpa5 = Total1 + Total2 + Total3 + Total4 + Total5;
    credit5 = tot1 + tot2 + tot3 + tot4 + tot5;
    
    cgpa5 = sgpa5/credit5;
    
    
    let out5 = cgpa5.toFixed(3);
    
    document.getElementById("cgpa4").innerHTML="CGPA : "+ out5;
    
    
    
    
    
    






















var a5=(document.getElementById("subject42").value);
b5=(document.getElementById("subject43").value);
c5=(document.getElementById("subject44").value);
d5=(document.getElementById("subject45").value);
e5=(document.getElementById("subject46").value);
f5=(document.getElementById("subject47").value);
g5=(document.getElementById("subject48").value);
h5=(document.getElementById("subject49").value);
i5=(document.getElementById("subject50").value);	
tot6 = 24;	
if(a5=='O'){
    a5=10;
}
else if(a5=='A+'){
    a5=9;
}
else if(a5=='A'){
    a5=8;
}
else if(a5=='B+'){
    a5=7;
}
else if(a5=='B'){
    a5=6;
}
else if(a5=='RA-F'){
    a5=0;
    tot6 = tot6 - 4;
}

if(b5=='O'){
    b5=10;
}
else if(b5=='A+'){
    b5=9;
}
else if(b5=='A'){
    b5=8;
}
else if(b5=='B+'){
    b5=7;
}
else if(b5=='B'){
    b5=6;
}
else if(b5=='RA-F'){
    b5=0;
    tot6 = tot6 - 3;
}

if(c5=='O'){
    c5=10;
}
else if(c5=='A+'){
    c5=9;
}
else if(c5=='A'){
    c5=8;
}
else if(c5=='B+'){
    c5=7;
}
else if(c5=='B'){
    c5=6;
}
else if(c5=='RA-F'){
    c5=0;
    tot6 = tot6 - 3;
}

if(d5=='O'){
    d5=10;
}
else if(d5=='A+'){
    d5=9;
}
else if(d5=='A'){
    d5=8;
}
else if(d5=='B+'){
    d5=7;
}
else if(d5=='B'){
    d5=6;
}
else if(d5=='RA-F'){
    d5=0;
    tot6 = tot6 - 3;
}

if(e5=='O'){
    e5=10;
}
else if(e5=='A+'){
    e5=9;
}
else if(e5=='A'){
    e5=8;
}
else if(e5=='B+'){
    e5=7;
}
else if(e5=='B'){
    e5=6;
}
else if(e5=='RA-F'){
    e5=0;
    tot6 = tot6 - 3;
}
if(f5=='O'){
    f5=10;
}
else if(f5=='A+'){
    f5=9;
}
else if(f5=='A'){
    f5=8;
}
else if(f5=='B+'){
    f5=7;
}
else if(f5=='B'){
    f5=6;
}
else if(f5=='RA-F'){
    f5=0;
    tot6 = tot6 - 3;
}

if(g5=='O'){
    g5=10;
}
else if(g5=='A+'){
    g5=9;
}
else if(g5=='A'){
    g3=8;
}
else if(g5=='B+'){
    g5=7;
}
else if(g5=='B'){
    g5=6;
}
else if(g5=='RA-F'){
    g5=0;
    tot6 = tot6 - 1;
}	

if(h5=='O'){
    h5=10;
}
else if(h5=='A+'){
    h5=9;
}
else if(h5=='A'){
    h5=8;
}
else if(h5=='B+'){
    h5=7;
}
else if(h5=='B'){
    h5=6;
}
else if(h5=='RA-F'){
    h5=0;
    tot6 = tot6 - 1;
}

if(i5=='O'){
    i5=10;
}
else if(i5=='A+'){
    i5=9;
}
else if(i5=='A'){
    i5=8;
}
else if(i5=='B+'){
    i5=7;
}
else if(i5=='B'){
    i5=6;
}
else if(i5=='RA-F'){
    i5=0;
    tot6 = tot6 - 3;
}	

var Total6=(4*a5)+(3*b5)+(3*c5)+(3*d5)+(3*e5)+(3*f5)+(1*g5)+(1*h5)+(3*i5);
var Result6=Total6/tot6;
var n6 = Result6.toFixed(3);
document.getElementById("Result6").innerHTML="SGPA : "+n6;



var cgpa6;
var sgpa6;
var credit6;

sgpa6 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6;
credit6 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6;

cgpa6 = sgpa6/credit6;


let out6 = cgpa6.toFixed(3);

document.getElementById("cgpa6").innerHTML="CGPA : "+ out6;






var a6=(document.getElementById("subject51").value);
b6=(document.getElementById("subject52").value);
c6=(document.getElementById("subject53").value);
d6=(document.getElementById("subject54").value);
e6=(document.getElementById("subject55").value);
f6=(document.getElementById("subject56").value);
g6=(document.getElementById("subject57").value);
h6=(document.getElementById("subject58").value);
	
tot7 = 20;	
if(a6=='O'){
    a6=10;
}
else if(a6=='A+'){
    a6=9;
}
else if(a6=='A'){
    a6=8;
}
else if(a6=='B+'){
    a6=7;
}
else if(a6=='B'){
    a6=6;
}
else if(a6=='RA-F'){
    a6=0;
    tot7 = tot7 - 3;
}

if(b6=='O'){
    b6=10;
}
else if(b6=='A+'){
    b6=9;
}
else if(b6=='A'){
    b6=8;
}
else if(b6=='B+'){
    b6=7;
}
else if(b6=='B'){
    b6=6;
}
else if(b6=='RA-F'){
    b6=0;
    tot7 = tot7 - 3;
}

if(c6=='O'){
    c6=10;
}
else if(c6=='A+'){
    c6=9;
}
else if(c6=='A'){
    c6=8;
}
else if(c6=='B+'){
    c6=7;
}
else if(c6=='B'){
    c6=6;
}
else if(c6=='RA-F'){
    c6=0;
    tot7 = tot7 - 3;
}

if(d6=='O'){
    d6=10;
}
else if(d6=='A+'){
    d6=9;
}
else if(d6=='A'){
    d6=8;
}
else if(d6=='B+'){
    d6=7;
}
else if(d6=='B'){
    d6=6;
}
else if(d6=='RA-F'){
    d6=0;
    tot7 = tot7 - 3;
}

if(e6=='O'){
    e6=10;
}
else if(e6=='A+'){
    e6=9;
}
else if(e6=='A'){
    e6=8;
}
else if(e6=='B+'){
    e6=7;
}
else if(e6=='B'){
    e6=6;
}
else if(e6=='RA-F'){
    e6=0;
    tot7 = tot7 - 3;
}
if(f6=='O'){
    f6=10;
}
else if(f6=='A+'){
    f6=9;
}
else if(f6=='A'){
    f6=8;
}
else if(f6=='B+'){
    f6=7;
}
else if(f6=='B'){
    f6=6;
}
else if(f6=='RA-F'){
    f6=0;
    tot7 = tot7 - 3;
}

if(g6=='O'){
    g6=10;
}
else if(g6=='A+'){
    g6=9;
}
else if(g6=='A'){
    g6=8;
}
else if(g6=='B+'){
    g6=7;
}
else if(g6=='B'){
    g6=6;
}
else if(g6=='RA-F'){
    g6=0;
    tot7 = tot7 - 1;
}	

if(h6=='O'){
    h6=10;
}
else if(h6=='A+'){
    h6=9;
}
else if(h6=='A'){
    h6=8;
}
else if(h6=='B+'){
    h6=7;
}
else if(h6=='B'){
    h6=6;
}
else if(h6=='RA-F'){
    h6=0;
    tot7 = tot7 - 1;
}

var total7=(3*a6)+(3*b6)+(3*c6)+(3*d6)+(3*e6)+(3*f6)+(1*g6)+(1*h6);
var Result7=total7/tot7;
var n7 = Result7.toFixed(3);
document.getElementById("Result7").innerHTML="SGPA : "+n7;

var cgpa7;
var sgpa7;
var credit7;

sgpa7 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6 + total7;
credit7 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7;

var cgpa7 = sgpa7/credit7;
let out7 = cgpa7.toFixed(3);

document.getElementById("cgpa7").innerHTML="CGPA : "+ out7;











var a7=(document.getElementById("subject59").value);
b7=(document.getElementById("subject60").value);
c7=(document.getElementById("subject61").value);
d7=(document.getElementById("subject62").value);

	
tot8 = 15;	
if(a7=='O'){
    a7=10;
}
else if(a7=='A+'){
    a7=9;
}
else if(a7=='A'){
    a7=8;
}
else if(a7=='B+'){
    a7=7;
}
else if(a7=='B'){
    a7=6;
}
else if(a7=='RA-F'){
    a7=0;
    tot8 = tot8 - 3;
}

if(b7=='O'){
    b7=10;
}
else if(b7=='A+'){
    b7=9;
}
else if(b7=='A'){
    b7=8;
}
else if(b7=='B+'){
    b7=7;
}
else if(b7=='B'){
    b7=6;
}
else if(b7=='RA-F'){
    b7=0;
    tot8 = tot8 - 3;
}

if(c7=='O'){
    c7=10;
}
else if(c7=='A+'){
    c7=9;
}
else if(c7=='A'){
    c7=8;
}
else if(c7=='B+'){
    c7=7;
}
else if(c7=='B'){
    c7=6;
}
else if(c7=='RA-F'){
    c7=0;
    tot8 = tot8 - 3;
}

if(d7=='O'){
    d7=10;
}
else if(d7=='A+'){
    d7=9;
}
else if(d7=='A'){
    d7=8;
}
else if(d7=='B+'){
    d7=7;
}
else if(d7=='B'){
    d7=6;
}
else if(d7=='RA-F'){
    d7=0;
    tot8 = tot8 - 6;
}

var total8=(3*a7)+(3*b7)+(3*c7)+(6*d7);
var Result8=total8/tot8;
var n8 = Result8.toFixed(3);
document.getElementById("Result8").innerHTML="SGPA : "+n8;





var sgpa8 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6 + total7 + total8;
var credit8 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7 + tot8;

var cgpa8 = sgpa8/credit8;
let out8 = cgpa8.toFixed(3);

document.getElementById("cgpa8").innerHTML="CGPA : "+ out8;




}






$("document").ready(function(){

    $('#subject1').change(function() {
        localStorage.setItem('data1', this.value);
    });
    if(localStorage.getItem('data1')){
        $('#subject1').val(localStorage.getItem('data1'));
    }




    $('#subject2').change(function() {
        localStorage.setItem('data2', this.value);
    });
    if(localStorage.getItem('data2')){
        $('#subject2').val(localStorage.getItem('data2'));
    }





    $('#subject3').change(function() {
        localStorage.setItem('data3', this.value);
    });
    if(localStorage.getItem('data3')){
        $('#subject3').val(localStorage.getItem('data3'));
    }






    $('#subject4').change(function() {
        localStorage.setItem('data4', this.value);
    });
    if(localStorage.getItem('data4')){
        $('#subject4').val(localStorage.getItem('data4'));
    }






    $('#subject5').change(function() {
        localStorage.setItem('data5', this.value);
    });
    if(localStorage.getItem('data5')){
        $('#subject5').val(localStorage.getItem('data5'));
    }






    $('#subject6').change(function() {
        localStorage.setItem('data6', this.value);
    });
    if(localStorage.getItem('data6')){
        $('#subject6').val(localStorage.getItem('data6'));
    }






    $('#subject7').change(function() {
        localStorage.setItem('data7', this.value);
    });
    if(localStorage.getItem('data7')){
        $('#subject7').val(localStorage.getItem('data7'));
    }






    $('#subject8').change(function() {
        localStorage.setItem('data8', this.value);
    });
    if(localStorage.getItem('data8')){
        $('#subject8').val(localStorage.getItem('data8'));
    }






    $('#subject9').change(function() {
        localStorage.setItem('data9', this.value);
    });
    if(localStorage.getItem('data9')){
        $('#subject9').val(localStorage.getItem('data9'));
    }






    $('#subject10').change(function() {
        localStorage.setItem('data10', this.value);
    });
    if(localStorage.getItem('data10')){
        $('#subject10').val(localStorage.getItem('data10'));
    }






    $('#subject11').change(function() {
        localStorage.setItem('data11', this.value);
    });
    if(localStorage.getItem('data11')){
        $('#subject11').val(localStorage.getItem('data11'));
    }






    $('#subject12').change(function() {
        localStorage.setItem('data12', this.value);
    });
    if(localStorage.getItem('data12')){
        $('#subject12').val(localStorage.getItem('data12'));
    }






    $('#subject13').change(function() {
        localStorage.setItem('data13', this.value);
    });
    if(localStorage.getItem('data13')){
        $('#subject13').val(localStorage.getItem('data13'));
    }






    $('#subject14').change(function() {
        localStorage.setItem('data14', this.value);
    });
    if(localStorage.getItem('data14')){
        $('#subject14').val(localStorage.getItem('data14'));
    }






    $('#subject15').change(function() {
        localStorage.setItem('data15', this.value);
    });
    if(localStorage.getItem('data15')){
        $('#subject15').val(localStorage.getItem('data15'));
    }






    $('#subject16').change(function() {
        localStorage.setItem('data16', this.value);
    });
    if(localStorage.getItem('data16')){
        $('#subject16').val(localStorage.getItem('data16'));
    }






    $('#subject17').change(function() {
        localStorage.setItem('data17', this.value);
    });
    if(localStorage.getItem('data17')){
        $('#subject17').val(localStorage.getItem('data17'));
    }






    $('#subject18').change(function() {
        localStorage.setItem('data18', this.value);
    });
    if(localStorage.getItem('data18')){
        $('#subject18').val(localStorage.getItem('data18'));
    }






    $('#subject19').change(function() {
        localStorage.setItem('data19', this.value);
    });
    if(localStorage.getItem('data19')){
        $('#subject19').val(localStorage.getItem('data19'));
    }






    $('#subject20').change(function() {
        localStorage.setItem('data20', this.value);
    });
    if(localStorage.getItem('data20')){
        $('#subject20').val(localStorage.getItem('data20'));
    }






    $('#subject21').change(function() {
        localStorage.setItem('data21', this.value);
    });
    if(localStorage.getItem('data21')){
        $('#subject21').val(localStorage.getItem('data21'));
    }






    $('#subject22').change(function() {
        localStorage.setItem('data22', this.value);
    });
    if(localStorage.getItem('data22')){
        $('#subject22').val(localStorage.getItem('data22'));
    }






    $('#subject23').change(function() {
        localStorage.setItem('data23', this.value);
    });
    if(localStorage.getItem('data23')){
        $('#subject23').val(localStorage.getItem('data23'));
    }






    $('#subject24').change(function() {
        localStorage.setItem('data24', this.value);
    });
    if(localStorage.getItem('data24')){
        $('#subject24').val(localStorage.getItem('data24'));
    }






    $('#subject25').change(function() {
        localStorage.setItem('data25', this.value);
    });
    if(localStorage.getItem('data25')){
        $('#subject25').val(localStorage.getItem('data25'));
    }






    $('#subject26').change(function() {
        localStorage.setItem('data26', this.value);
    });
    if(localStorage.getItem('data26')){
        $('#subject26').val(localStorage.getItem('data26'));
    }






    $('#subject27').change(function() {
        localStorage.setItem('data27', this.value);
    });
    if(localStorage.getItem('data27')){
        $('#subject27').val(localStorage.getItem('data27'));
    }






    $('#subject28').change(function() {
        localStorage.setItem('data28', this.value);
    });
    if(localStorage.getItem('data28')){
        $('#subject28').val(localStorage.getItem('data28'));
    }






    $('#subject29').change(function() {
        localStorage.setItem('data29', this.value);
    });
    if(localStorage.getItem('data29')){
        $('#subject29').val(localStorage.getItem('data29'));
    }






    $('#subject30').change(function() {
        localStorage.setItem('data30', this.value);
    });
    if(localStorage.getItem('data30')){
        $('#subject30').val(localStorage.getItem('data30'));
    }



    $('#subject31').change(function() {
        localStorage.setItem('data31', this.value);
    });
    if(localStorage.getItem('data31')){
        $('#subject31').val(localStorage.getItem('data31'));
    }

    $('#subject32').change(function() {
        localStorage.setItem('data32', this.value);
    });
    if(localStorage.getItem('data32')){
        $('#subject32').val(localStorage.getItem('data32'));
    }


    $('#subject33').change(function() {
        localStorage.setItem('data33', this.value);
    });
    if(localStorage.getItem('data33')){
        $('#subject33').val(localStorage.getItem('data33'));
    }



    $('#subject34').change(function() {
        localStorage.setItem('data34', this.value);
    });
    if(localStorage.getItem('data34')){
        $('#subject34').val(localStorage.getItem('data34'));
    }



    $('#subject35').change(function() {
        localStorage.setItem('data35', this.value);
    });
    if(localStorage.getItem('data35')){
        $('#subject35').val(localStorage.getItem('data35'));
    }

    $('#subject36').change(function() {
        localStorage.setItem('data36', this.value);
    });
    if(localStorage.getItem('data36')){
        $('#subject36').val(localStorage.getItem('data36'));
    }
    
    $('#subject37').change(function() {
        localStorage.setItem('data37', this.value);
    });
    if(localStorage.getItem('data37')){
        $('#subject37').val(localStorage.getItem('data37'));
    }
    
    $('#subject38').change(function() {
        localStorage.setItem('data38', this.value);
    });
    if(localStorage.getItem('data38')){
        $('#subject38').val(localStorage.getItem('data38'));
    }
    
    $('#subject39').change(function() {
        localStorage.setItem('data39', this.value);
    });
    if(localStorage.getItem('data39')){
        $('#subject39').val(localStorage.getItem('data39'));
    }
    
    $('#subject40').change(function() {
        localStorage.setItem('data40', this.value);
    });
    if(localStorage.getItem('data40')){
        $('#subject40').val(localStorage.getItem('data40'));
    }
    
    $('#subject41').change(function() {
        localStorage.setItem('data41', this.value);
    });
    if(localStorage.getItem('data41')){
        $('#subject41').val(localStorage.getItem('data41'));
    }
    
    $('#subject42').change(function() {
        localStorage.setItem('data42', this.value);
    });
    if(localStorage.getItem('data42')){
        $('#subject42').val(localStorage.getItem('data42'));
    }
    
    $('#subject43').change(function() {
        localStorage.setItem('data43', this.value);
    });
    if(localStorage.getItem('data43')){
        $('#subject43').val(localStorage.getItem('data43'));
    }
    
    $('#subject44').change(function() {
        localStorage.setItem('data44', this.value);
    });
    if(localStorage.getItem('data44')){
        $('#subject44').val(localStorage.getItem('data44'));
    }
    
    $('#subject45').change(function() {
        localStorage.setItem('data45', this.value);
    });
    if(localStorage.getItem('data45')){
        $('#subject45').val(localStorage.getItem('data45'));
    }
    
    $('#subject46').change(function() {
        localStorage.setItem('data46', this.value);
    });
    if(localStorage.getItem('data46')){
        $('#subject46').val(localStorage.getItem('data46'));
    }
    
    $('#subject47').change(function() {
        localStorage.setItem('data47', this.value);
    });
    if(localStorage.getItem('data47')){
        $('#subject47').val(localStorage.getItem('data47'));
    }
    
    $('#subject48').change(function() {
        localStorage.setItem('data48', this.value);
    });
    if(localStorage.getItem('data48')){
        $('#subject48').val(localStorage.getItem('data48'));
    }
    
    $('#subject49').change(function() {
        localStorage.setItem('data49', this.value);
    });
    if(localStorage.getItem('data49')){
        $('#subject49').val(localStorage.getItem('data49'));
    }
    
    $('#subject50').change(function() {
        localStorage.setItem('data50', this.value);
    });
    if(localStorage.getItem('data50')){
        $('#subject50').val(localStorage.getItem('data50'));
    }
    
    $('#subject51').change(function() {
        localStorage.setItem('data51', this.value);
    });
    if(localStorage.getItem('data51')){
        $('#subject51').val(localStorage.getItem('data51'));
    }
    
    $('#subject52').change(function() {
        localStorage.setItem('data52', this.value);
    });
    if(localStorage.getItem('data52')){
        $('#subject52').val(localStorage.getItem('data52'));
    }
    
    $('#subject53').change(function() {
        localStorage.setItem('data53', this.value);
    });
    if(localStorage.getItem('data53')){
        $('#subject53').val(localStorage.getItem('data53'));
    }
    
    $('#subject54').change(function() {
        localStorage.setItem('data54', this.value);
    });
    if(localStorage.getItem('data54')){
        $('#subject54').val(localStorage.getItem('data54'));
    }
    
    $('#subject55').change(function() {
        localStorage.setItem('data55', this.value);
    });
    if(localStorage.getItem('data55')){
        $('#subject55').val(localStorage.getItem('data55'));
    }
    
    $('#subject56').change(function() {
        localStorage.setItem('data56', this.value);
    });
    if(localStorage.getItem('data56')){
        $('#subject56').val(localStorage.getItem('data56'));
    }
    
    $('#subject57').change(function() {
        localStorage.setItem('data57', this.value);
    });
    if(localStorage.getItem('data57')){
        $('#subject57').val(localStorage.getItem('data57'));
    }
    
    $('#subject58').change(function() {
        localStorage.setItem('data58', this.value);
    });
    if(localStorage.getItem('data58')){
        $('#subject58').val(localStorage.getItem('data58'));
    }
    
    $('#subject59').change(function() {
        localStorage.setItem('data59', this.value);
    });
    if(localStorage.getItem('data59')){
        $('#subject59').val(localStorage.getItem('data59'));
    }
    
    $('#subject60').change(function() {
        localStorage.setItem('data60', this.value);
    });
    if(localStorage.getItem('data60')){
        $('#subject60').val(localStorage.getItem('data60'));
    }
    
    $('#subject61').change(function() {
        localStorage.setItem('data61', this.value);
    });
    if(localStorage.getItem('data61')){
        $('#subject61').val(localStorage.getItem('data61'));
    }
    
    $('#subject62').change(function() {
        localStorage.setItem('data62', this.value);
    });
    if(localStorage.getItem('data62')){
        $('#subject62').val(localStorage.getItem('data62'));
    }



})
