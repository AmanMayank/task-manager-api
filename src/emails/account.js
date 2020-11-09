const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to:email,
		from:'aman.mayank87@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
	})
}

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to:email,
		from: 'aman.mayank87@gmail.com',
		subject : 'Dont wish to let you go',
		text:`Never imagined this day would come, ${name}. Could you share the reasons to enable to serve you better in the future`
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancellationEmail
}