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
  // setFilterBy,
  getDefaultFilter,
}

function query({ globalSearch, ...filterBy }) {
  return asyncStorage.query(MAILS_KEY).then((mails) => {
    return mails.filter((mail) => {
      // Check for individual filters
      if (
        filterBy.subject &&
        !new RegExp(filterBy.subject, 'i').test(mail.subject)
      ) {
        return false
      }
      if (filterBy.from && !new RegExp(filterBy.from, 'i').test(mail.from)) {
        return false
      }
      if (filterBy.to && !new RegExp(filterBy.to, 'i').test(mail.to)) {
        return false
      }
      if (
        filterBy.isRead !== '' &&
        mail.isRead.toString() !== filterBy.isRead
      ) {
        return false
      }
      if (filterBy.body && !new RegExp(filterBy.body, 'i').test(mail.body)) {
        return false
      }

      // Global search logic
      if (globalSearch) {
        const searchRegex = new RegExp(globalSearch, 'i')
        return (
          searchRegex.test(mail.subject) ||
          searchRegex.test(mail.from) ||
          searchRegex.test(mail.to) ||
          searchRegex.test(mail.body)
        )
      }

      return true
    })
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
    from: '',
    to: '',
    body: '',
    isRead: '', // Represents 'All'
  }
}

function _createMails() {
  let mails = storageService.loadFromStorage(MAILS_KEY)
  if (!mails || !mails.length) {
    mails = [
      {
        id: 'OXeMG8wNsk1',
        subject: 'Welcome to Global Tech News!',
        body: 'Dear user, welcome to Global Tech News! Stay tuned for daily updates on cutting-edge technology and industry insights. Thank you for subscribing.',
        isRead: false,
        sentAt: 1551240930594,
        removedAt: null,
        from: 'newsletter@globaltechnews.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk2',
        subject: 'Your Flight Booking Confirmation - Flight A123',
        body: 'Thank you for booking with SkyHigh Airlines. Your flight A123 from New York to London is confirmed for 20th Dec 2023. Your itinerary and ticket are attached.',
        isRead: false,
        sentAt: 1551251930594,
        removedAt: null,
        from: 'reservations@skyhighairlines.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk3',
        subject: 'Password Reset Alert for Your SocialZ Account',
        body: "We've received a request to reset your password for your SocialZ account. If you did not request this, please contact our support team immediately to secure your account.",
        isRead: false,
        sentAt: 1551262930594,
        removedAt: null,
        from: 'security@socialz.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk4',
        subject: 'Get Ready to Explore Our Online Community!',
        body: "Hello and welcome! We're excited to have you in our online community. Dive into discussions, share your thoughts, and connect with people from around the globe.",
        isRead: false,
        sentAt: 1551273930594,
        removedAt: null,
        from: 'community@connecthub.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk5',
        subject: 'Invoice #45678 from Your Recent GadgetMart Purchase',
        body: 'Thank you for shopping at GadgetMart! Attached is the invoice for your recent purchase of the SmartHome Speaker. We hope you enjoy your new gadget!',
        isRead: true,
        sentAt: 1551284930594,
        removedAt: null,
        from: 'billing@gadgetmart.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk6',
        subject: 'Invitation to Exclusive Webinar: Future Tech Trends',
        body: "Join our exclusive webinar on Future Tech Trends this Friday! Hear from leading experts about what's on the horizon in tech. Click to RSVP.",
        isRead: false,
        sentAt: 1551295930594,
        removedAt: null,
        from: 'events@techinsights.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk7',
        subject: 'Profile Update Reminder',
        body: "Hi there! We've noticed your profile hasn't been updated in a while. Keeping your profile up-to-date helps us better serve your needs.",
        isRead: false,
        sentAt: 1551306930594,
        removedAt: null,
        from: 'updates@userservices.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk8',
        subject: 'This Week in Tech: Don’t Miss Our Latest Newsletter!',
        body: "Dive into this week's edition of our newsletter for the latest tech news, insights, and interviews with industry leaders. Your weekly tech digest is here!",
        isRead: true,
        sentAt: 1551317930594,
        removedAt: null,
        from: 'editor@techweekly.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNsk9',
        subject: 'Planned System Maintenance Notification',
        body: "We're committed to improving your experience. Please note our systems will undergo maintenance on Sunday. We apologize for any inconvenience.",
        isRead: false,
        sentAt: 1551328930594,
        removedAt: null,
        from: 'it-support@serviceplus.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNs10',
        subject: "Tell Us How We're Doing!",
        body: 'Your opinion matters to us! Please take a moment to fill out our customer satisfaction survey. Your feedback helps us improve and serve you better.',
        isRead: false,
        sentAt: 1551339930594,
        removedAt: null,
        from: 'feedback@qualityservices.com',
        to: 'user@appsus.com',
      },
      {
        id: 'OXeMG8wNs11',
        subject: 'Exclusive Deals on Winter Getaways!',
        body: 'Ready for your next adventure? Check out our exclusive winter travel deals and embark on an unforgettable journey!',
        isRead: false,
        sentAt: new Date().setHours(3, 0, 0, 0), // This sets the date to today at 3:00 AM
        removedAt: null,
        from: 'traveldeals@wanderlust.com',
        to: 'user@appsus.com',
      },

      {
        id: 'OXeMG8wNs12',
        subject: '5 Quick and Healthy Dinner Recipes',
        body: 'Need dinner ideas? Here are 5 quick and healthy recipes to make your weeknights easier and tastier.',
        isRead: false,
        sentAt: new Date().setHours(7, 0, 0, 0), // This sets the date to today at 3:00 AM
        removedAt: null,
        from: 'recipes@culinarydelights.com',
        to: 'user@appsus.com',
      },
    ]
  }
  storageService.saveToStorage(MAILS_KEY, mails)
}
