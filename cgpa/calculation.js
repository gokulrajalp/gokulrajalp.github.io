setInterval(cgpa, 500);

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





})

