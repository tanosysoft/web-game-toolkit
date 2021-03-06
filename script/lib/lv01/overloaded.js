'use strict'; {

wgt.overloaded = (args, specs) => {
    let spec;

    for(const key in specs) {
        if(args.length === parseInt(key)) {
            spec = specs[key];
            break;
        }
    }

    if(!spec) {
        if(specs.default) {
            return specs.default.apply(specs, args);
        }
        else {
            throw new TypeError('Bad function arguments');
        }
    }

    return (() => {
        const ret = {};

        for(var i in spec) {
            ret[spec[i]] = args[i];
        }

        return ret;
    })();
};

}
