import * as React from 'react';

export = TrysilPlug;
export as namespace TrysilPlug;



declare module TrysilPlug {
    interface TrysilPlugProps {
        kicker?: string,
        title?: string,
        subtitle?: string,
        image?: string,
        labels?: string[],
        url: string,
    }

    type TrysilPlug = React.Component<TrysilPlugProps,{}>;
    var TrysilPlug: React.ComponentClass<TrysilPlugProps>;
}

/*
 * Why does this not work?
 */
/*
export = Col;
export as namespace Col;

declare namespace TrysilPlug {
    interface DisplayProps {
        text: string;
    }

    type Col = React.ClassicComponent<{},{}>;
    var Col: React.ClassicComponentClass<void>;
}
*/