import React, { PureComponent } from 'react';

export default class LeftArrow extends PureComponent {
    render() {
        return (
            <path
                d="M18.3986407,7.65510741 L12,13.8300075 L5.60135725,7.65510546 C5.14150935,7.21129876 4.43778366,7.25756618 4.03031254,7.7552821 C3.62357936,8.25209663 3.66385814,9.01317255 4.12257613,9.45588874 L11.2606084,16.34492 C11.6820987,16.7517071 12.3179013,16.7517071 12.7393916,16.34492 L19.8774239,9.45588874 C20.3361419,9.01317255 20.3764206,8.25209663 19.9696875,7.7552821 C19.5622163,7.25756619 18.8584907,7.21129876 18.3986407,7.65510741 Z"
                transform="rotate(90 12 12)"
            />
        );
    }
}
