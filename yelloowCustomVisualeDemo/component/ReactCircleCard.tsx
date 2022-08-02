import * as React from "react";

export interface State {
    textLabel: string,
    textValue: string,
    size: number,
    background?: string,
    borderWidth?: number,
    kpi: object
}

export const initialState: State = {
    textLabel: "",
    textValue: "",
    size: 200,
    kpi: []
}

export class ReactCircleCard extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof ReactCircleCard.updateCallback === 'function') {
            ReactCircleCard.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        ReactCircleCard.updateCallback = (newState: State): void => {
            this.setState(newState);
        };
    }

    public componentWillUnmount() {
        ReactCircleCard.updateCallback = null;
    }

    render() {
        const {textLabel, textValue, size, background, borderWidth, kpi} = this.state;
        const style: React.CSSProperties = {width: size, height: size, background, borderWidth};

        console.log(textLabel)
        console.log(kpi)
        return (
            <>
                <div className="circleCard">
                    <div className="whole-circle"
                        // style={style}
                    >
                        <div className="circleCardTop theme-red-top">

                        </div>
                        <div className="circleCardBottom theme-red-bottom">
                            <p>
                                {textLabel}
                                <br/>
                                <em>{textValue}</em>
                            </p>
                        </div>
                    </div>
                    <div className="whole-circle"
                        // style={style}
                    >
                        <div className="circleCardTop theme-yellow-top">

                        </div>
                        <div className="circleCardBottom theme-yellow-bottom">
                        </div>
                    </div>
                    <div className="whole-circle"
                        // style={style}
                    >
                        <div className="circleCardTop theme-green-top">

                        </div>
                        <div className="circleCardBottom theme-green-bottom">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ReactCircleCard;