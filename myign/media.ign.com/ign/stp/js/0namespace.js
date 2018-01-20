jQuery.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=window;
        for (j=0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};

jQuery.namespace( 'ign.social' );

ign.social.generic = {
    error: function(message) {
        if(typeof(console) !== 'undefined' && console != null) {
            console.log(message);
        }
    },

    nicetime: function(date)
    {
        var periods         = new Array("milliseconds","second", "minute", "hour", "day", "week", "month", "year", "decade");
        var lengths         = new Array("1000","60","60","24","7","4.35","12","10");

        var now             = new Date();
        ign.social.generic.error(now);
        var unix_date       = new Date(date);

        var difference      = now - unix_date;

        for(j = 0; difference >= lengths[j] && j < lengths.length-1; j++) {
            difference = difference / lengths[j];
        }

        difference = Math.round(difference);

        if(difference != 1) {
            periods[j]+= "s";
        }

        return difference+" "+periods[j]+" ago";
    }
}
