const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const db = admin.firestore()

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
.document('guests/{guestId}')
.onCreate((event, context) => {
  const guestId = context.params.guestId

  const db = admin.firestore()

  return db.collection('guests').doc(guestId)
    .get()
    .then(doc => {

      const guest = doc.data()
      const msg = {
        to: guest.email,
        from: 'thecouple@bryantandcheyenne.com',

        templateId: 'd-28142a2b21354a60a4c4767a0682a2d8',
        dynamic_template_data: {
          name: guest.name
        }
      }
      return sgMail.send(msg)
    })
    .then(() => console.log('Email Sent'))
    .catch(err => console.log(err))
})
