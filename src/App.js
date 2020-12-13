import React, {useState} from 'react';

var moment = require('moment');
moment().format();

function withModified(Component) {
	return class extends React.Component {
		render() {
			const dateFromServer = Date.parse(this.props.date);
			const passedTime = ` - ${moment(dateFromServer).fromNow()}`;
			return <Component {...this.props} passedTime={passedTime}/>;
		}
	};
}

const DateTimePretty = withModified(DateTime);

function DateTime(props) {
	return (
		<p className="date">{props.date} {props.passedTime}</p>
	)
}

function Video(props) {
	return (
		<div className="video">
			<iframe title="youtube-container" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			<DateTimePretty date={props.date} />
		</div>
	)
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.url} />);
}

export default function App() {
  const [list, setList] = useState([
		{
				url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2020-12-20 13:24:00'
		},
		{
				url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2020-12-13 11:30:00'
		},
		{
				url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2020-12-10 23:16:00'
		},
		{
				url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2020-11-15 12:10:00'
		},
		{
				url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2020-07-01 16:17:00'
		},
		{
				url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
				date: '2018-12-13 11:24:00'
		},
  ]);

	return (
		<VideoList list={list} />
	);
}
