const React = require('react');

class Edit extends React.Component {
    render() {
        return (
                <form action={`/pins/${this.props.pins._id}`} method='PUT'>
                    <img src={`${picture}`} alt={`${title}`} />
                    <h2>{`Title: ${title}`}</h2>
                    <p>{`Description: ${description}`}</p>
                    <p>{`Link: ${link}`}</p>
                    <input type="submit" value={`Edit ${this.props.logs.title}`} />
                </form>
        )
    }
}

module.exports = Edit;