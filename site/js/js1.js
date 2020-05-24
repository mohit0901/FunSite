function func(d)
{
	var pic1="images/bulbon.jpg";
	var pic2="images/bulboff.jpg";
	if(d==1)
	{
		document.getElementById('i1').src=pic1;
	}
	else
	{
		document.getElementById('i1').src=pic2;
	}
}