/**
 * This module contains support functions for various asthetics in the app. 
 */


/**
 * This method an engine of our color opperations in app.
 * 
 * @rewrite - You should learn to do this kind of work.
 * !!This is borrowed code!! Written by Pimp Trizkit (github: @PimpTrizkit, StackOverflow:)
 * 
 * First Learned about: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 * Taken from: https://github.com/PimpTrizkit/PJs/blob/master/pSBC.js
 * Explained At: https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
 * 
 * @param {Number} p
 * @param {String} c0 
 * @param {String} c1 
 * @param {*} l 
 */
const pSBC=(p,c0,c1,l)=> {
	let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
	if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
	if(!this.pSBCr)this.pSBCr=(d)=>{
		let n=d.length,x={};
		if(n>9){
			[r,g,b,a]=d=d.split(","),n=d.length;
			if(n<3||n>4)return null;
			x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
		}else{
			if(n==8||n==6||n<4)return null;
			if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
			d=i(d.slice(1),16);
			if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
			else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
		}return x};
	h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=pSBCr(c0),P=p<0,t=c1&&c1!="c"?pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
	if(!f||!t)return null;
	if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
	else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
	a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
	if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
	else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

/**
 * Darkens or Lightens a color by a given percentage.
 * 
 * @param {Number} percent - the percentage by which a color is darken or lightened. A float on the interval of [0,1]. Positive values lighten, and negative values darken.
 * @param {String} color - the color to be manipulated. A string in HEX or RGB(A) format.
 */
export function shadeColor(percent, color) {
    return pSBC(percent, color);
}

export function transitionColorTo(percent, fromColor, toColor) {
    return pSBC(percent, fromColor, toColor);
}

/**
 * Truncates a string down to a specified length, if it needs to be. If the string gets truncated '...' is appended to the end of it.
 * 
 * @param {String} text 
 * @param {Number} charLimit 
 */
export function truncateIfNeedBe(text, charLimit) {
	if(text.length > charLimit) {
		return text.substring(0, charLimit) + '...';
	}
	return text;
}

/**
 * 
 * @param {String} datetime 
 * @param {String} format 
 */
export function extractDate(datetime, outputFormat='mm-dd-yyy') {
	let dateFragments = datetime.substring(0,10).split('-');
	return dateFragments[1]+'/'+dateFragments[2]+'/'+dateFragments[0];
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * 
 * @param {String} now 
 * @param {String} then 
 */
export function daysBetween(now, then) {
	dt_now = new Date(now);
	
	dt_then = new Date(then);

	utc_now = Date.UTC(dt_now.getFullYear(), dt_now.getMonth(), dt_now.getDate());
	utc_then = Date.UTC(dt_then.getFullYear(), dt_then.getMonth(), dt_then.getDate());

	return (utc_then-utc_now)/_MS_PER_DAY;
}

/**
 * date state
 * cloose to due date
 * 
 * never forget the new term on a constructor
 */