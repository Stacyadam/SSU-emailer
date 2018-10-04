const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ssuError@gmail.com',
		pass: 'ssunited1'
	}
});

const mailOptions = {
	from: 'ssuError@gmail.com',
	to: 'Staceadam@gmail.com',
	subject: 'Error occured',
	html: '<p>There was an error</p>'
};

transporter.sendMail(mailOptions, (err, info) => {
	if (err) console.log(err);
	else console.log(info);
});
