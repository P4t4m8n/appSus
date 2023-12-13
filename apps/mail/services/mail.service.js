// mail service
import { utilService } from '../../../services/util.service.js'
import { asyncStorage } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const MAILS_KEY = 'mailDB'

_createMails()

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyMail,
  getFilterBy,
  //   setFilterBy,
  getDefaultFilter,
}

function query(filterBy) {
  return asyncStorage.query(MAILS_KEY).then((mails) => {
    if (filterBy.subject) {
      const regex = new RegExp(filterBy.subject, 'i')
      //   console.log('regex', regex)
      mails = mails.filter((mail) => {
        return regex.test(mail.subject) && mail.isRead
      })
    }
    if (filterBy.isRead) {
      mails = mails.filter((mail) => mail.isRead)
    }

    return mails
  })
}

function get(mailId) {
  return asyncStorage.get(MAILS_KEY, mailId)
}

function remove(mailId) {
  return asyncStorage.remove(MAILS_KEY, mailId)
}

function save(mail) {
  if (mail.id) {
    return asyncStorage.put(MAILS_KEY, mail)
  } else {
    return asyncStorage.post(MAILS_KEY, mail)
  }
}

function getEmptyMail() {
  return {
    // id: '',
    subject: '',
    body: '',
    isRead: false,
    sentAt: null,
    removedAt: null,
    from: '',
    to: '',
  }
}

function getFilterBy() {
  return {
    subject: '',
    isRead: null, // Using 'null' to represent an unfiltered state for the boolean
  }
}

function getDefaultFilter() {
  return {
    subject: '',
    isRead: null, // 'null' means no filter is applied for 'isRead' (both 'Read' and 'Unread')
  }
}

// let gFilterBy = getFilterBy()

// function setFilterBy(filterBy = {}) {
//   if (filterBy.subject !== undefined) gFilterBy.subject = filterBy.subject
//   if (filterBy.isRead !== undefined) gFilterBy.isRead = filterBy.isRead
//   return gFilterBy
// }

function _createMails() {
  let mails = storageService.loadFromStorage(MAILS_KEY)
  if (!mails || !mails.length) {
    mails = [
      {
        id: 'OXeMG8wNsk1',
        subject: 'Your Subscription Has Been Updated',
        body: 'Thank you for updating your subscription preferences.',
        isRead: false,
        sentAt: 1551240930594,
        removedAt: null,
        from: 'newsletter@updates.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk2',
        subject: 'Flight Itinerary Confirmation',
        body: 'Your flight details and itinerary are attached.',
        isRead: false,
        sentAt: 1551251930594,
        removedAt: null,
        from: 'travel@airline.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk3',
        subject: 'Password Reset Request',
        body: 'We received a request to reset your password. If this was not you, please contact support immediately.',
        isRead: false,
        sentAt: 1551262930594,
        removedAt: null,
        from: 'support@service.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk4',
        subject: 'Welcome to Our Community!',
        body: 'We are thrilled to have you join us. Here’s what you need to get started.',
        isRead: false,
        sentAt: 1551273930594,
        removedAt: null,
        from: 'community@platform.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk5',
        subject: 'Invoice for Recent Purchase',
        body: 'Attached is the invoice for your recent purchase. Thank you for choosing our services.',
        isRead: false,
        sentAt: 1551284930594,
        removedAt: null,
        from: 'billing@ecommerce.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk6',
        subject: 'Event Invitation: Tech Talks',
        body: 'Join us for an evening of exciting tech talks and networking.',
        isRead: false,
        sentAt: 1551295930594,
        removedAt: null,
        from: 'events@techtalks.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk7',
        subject: 'Action Required: Update Your Profile',
        body: 'Please update your profile to continue using our services without interruption.',
        isRead: false,
        sentAt: 1551306930594,
        removedAt: null,
        from: 'noreply@serviceprovider.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk8',
        subject: 'Weekly Newsletter: Industry Insights',
        body: 'This week’s newsletter covers the latest trends in the industry. Don’t miss out!',
        isRead: false,
        sentAt: 1551317930594,
        removedAt: null,
        from: 'news@industryinsights.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk9',
        subject: 'System Maintenance Notification',
        body: 'We will be undergoing scheduled maintenance this weekend. Services may be temporarily unavailable.',
        isRead: false,
        sentAt: 1551328930594,
        removedAt: null,
        from: 'it@companydomain.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNs10',
        subject: 'Customer Satisfaction Survey',
        body: 'We value your feedback. Please take a moment to complete our customer satisfaction survey.',
        isRead: false,
        sentAt: 1551339930594,
        removedAt: null,
        from: 'feedback@customerservice.com',
        to: 'user@appsus.com',
      },
    ]
  }

  storageService.saveToStorage(MAILS_KEY, mails)
}
