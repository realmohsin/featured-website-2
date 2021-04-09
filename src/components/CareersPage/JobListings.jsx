import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  jobListingsContainer: {
    paddingBottom: '13rem'
  },
  jobTitle: {
    ...theme.custom.title3,
    marginTop: '9rem',
    marginBottom: '3rem',
    textShadow: `-1px 0 ${theme.palette.primary.main}, 0 1px ${theme.palette.primary.main}, 1px 0 ${theme.palette.primary.main}, 0 -1px ${theme.palette.primary.main}`
  },
  listTitle: {
    ...theme.custom.title5,
    letterSpacing: '0.75px',
    margin: '1.8rem 0',
    textShadow: `-1px 0 ${theme.palette.primary.main}, 0 1px ${theme.palette.primary.main}, 1px 0 ${theme.palette.primary.main}, 0 -1px ${theme.palette.primary.main}`
  },
  list: {
    listStyle: 'disc outside none',
    paddingLeft: '3rem',
    '& > li': {
      marginBottom: '1.3rem'
    },
    marginBottom: '4rem'
  }
}))

const JobListings = props => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.jobListingsContainer}>
      <section>
        <h3 className={classes.jobTitle}>Office Manager</h3>
        <h5 className={classes.listTitle}>You Are:</h5>
        <ul className={classes.list}>
          <li>
            A problem-solver: you anticipate change, troubleshoot as issues
            arise, making necessary adjustments.
          </li>
          <li>Comfortable leading by example and delegating, as necessary.</li>
          <li>
            Capable of managing other administrators and being a trusted advisor
            to the leadership team.
          </li>
          <li>
            Confident, well-organized and prepared. You always have a Plan B
            ready.
          </li>
          <li>Experienced in managing competing priorities.</li>
          <li>
            Collaborative in nature and have a “roll-up your sleeves”, can-do
            attitude.
          </li>
          <li>Motivated, friendly and you love what you do.</li>
          <li>
            Practical and resourceful. You think big picture but are also
            attentive to detail.
          </li>
          <li>
            Clear in your communication. You are always naturally courteous.
          </li>
          <li>Professional in your demeanor, internally and externally.</li>
          <li>
            Excellent under pressure, while maintaining a calm disposition.
          </li>
        </ul>

        <h5 className={classes.listTitle}>You Have:</h5>
        <ul className={classes.list}>
          <li>
            A minimum of 3-years’ experience in office management OR office
            administration and delegation.
          </li>
          <li>
            Familiarity with running an office, including AR, AP, budgeting,
            reconciling and running P&L reports.
          </li>
          <li>Experience and comfortability with numbers and reporting.</li>
          <li>
            Amazing customer service skills. You’re responsive, punctual and
            proactive by nature.
          </li>
          <li>
            A tendency to follow up with them, before they follow up with you.
          </li>
          <li>You keep clients and the team well-informed.</li>
        </ul>

        <h5 className={classes.listTitle}>You Would:</h5>
        <ul className={classes.list}>
          <li>
            Work with our Managing Partner and our Leadership Team to help run
            the firm.
          </li>
          <li>Be a member of our team.</li>
        </ul>

        <h5 className={classes.listTitle}>Why You'll Love It Here:</h5>
        <ul className={classes.list}>
          <li>You’ll be a part of a work family of really awesome people.</li>
          <li>Your opinion and feedback will be valued.</li>
          <li>You’ll be challenged to grow and improve.</li>
          <li>
            You’ll be around a lot of interesting clients. If there’s one thing
            we’re not around here, it’s bored.
          </li>
        </ul>

        <h5 className={classes.listTitle}>To Be Considered:</h5>
        <ul className={classes.list}>
          <li>
            Please email your resume and cover letter to careers@romanolaw.com.
          </li>
          <li>In your email, please use the subject line “Office Manager.”</li>
          <li>
            In your cover letter, please tell us (a) your pay requirements, and
            (b) who was the first mayor of NYC.
          </li>
        </ul>

        <Typography variant='body1' gutterBottom>
          Your application will be considered ONLY if you have followed ALL the
          instructions above.
        </Typography>
      </section>

      <section>
        <h3 className={classes.jobTitle}>Experienced Corporate Attorney</h3>
        <h5 className={classes.listTitle}>Who We're Looking For</h5>
        <Typography variant='body1'>
          You are a stellar attorney with at least 4 full years of corporate
          transactional experience. Specifically, you can advise clients in
          structuring, documenting, negotiating and executing M&A transactions,
          including domestic and cross-border public and private acquisitions,
          business combinations, mergers, divestitures or equity investments.
          Preferably, you also have a working knowledge of federal and state
          securities laws, but not a requirement. You are practical and
          resourceful. Your legal research and writing are on point. You love
          being a lawyer. You communicate effectively, in plain-English. You are
          licensed to practice law in New York. You have a great sense of humor
          and deadlines do not phase you. You are positive, resilient and
          confident. You are almost always prepared. You enjoy learning and
          improving. You are receptive to constructive feedback. You treat
          everyone (clients, adversaries, colleagues and cleaning staff) with
          respect. You are polished and poised with lots of energy. You
          understand that the legal profession is a service business. Clients
          love you. You are always responsive and often proactive. You keep your
          clients and the team well-informed.
        </Typography>

        <h5 className={classes.listTitle}>You Would:</h5>
        <ul className={classes.list}>
          <li>
            Report to our Managing Partner, or such other person the firm deems
            appropriate.
          </li>
          <li>
            Draft, review and revise contracts, agreements and deliver practical
            advice.
          </li>
          <li>
            As your skills grow you would attend court conferences, take
            depositions and argue motions.
          </li>
          <li>
            Lead by example: with your work ethic, constructive feedback, and
            positive attitude.
          </li>
          <li>Have significant client contact, and</li>
          <li>Be involved in client development and the growth of the firm.</li>
        </ul>

        <h5 className={classes.listTitle}>APPLICATION INSTRUCTIONS</h5>
        <Typography variant='body1' gutterBottom>
          To be considered for this position, please email
          careers@romanolaw.com, with the subject line “Experienced Business
          Litigation Attorney.” Please include (a) your resume, (b) a cover
          letter, (c) pay requirements, (d) an academic transcript, and (e)
          where are motions returnable in New York County. In your cover letter,
          please briefly describe your relevant experience as a litigator.
        </Typography>

        <Typography variant='body1' gutterBottom>
          Your application will be considered ONLY if you have followed ALL the
          instructions above.
        </Typography>
      </section>

      <section>
        <h3 className={classes.jobTitle}>Client Development Director</h3>
        <h5 className={classes.listTitle}>You Are:</h5>
        <ul className={classes.list}>
          <li>Motivated, friendly and love what you do.</li>
          <li>
            Well-organized and resourceful. You think big picture but are
            attentive to detail.
          </li>
          <li>
            Polished and poised, with good energy and a desire to get things
            done efficiently.
          </li>
          <li>
            Courteous and professional, treating everyone (clients and
            colleagues) with respect.
          </li>
        </ul>

        <h5 className={classes.listTitle}>You Have:</h5>
        <ul className={classes.list}>
          <li>
            Excellent business development skills. You enjoy learning and
            improving.
          </li>
          <li>A great sense of humor. You’re resilient and confident.</li>
          <li>
            Amazing customer service skills. You’re always responsive and
            proactive.
          </li>
          <li>A sunny disposition even when things get stormy.</li>
        </ul>

        <h5 className={classes.listTitle}>You Would:</h5>
        <ul className={classes.list}>
          <li>Manage the Client Development team.</li>
          <li>Coordinate and analyze marketing and SEO initiatives.</li>
          <li>
            Develop and track metrics to measure success of the department.
          </li>
          <li>Follow up on business leads and marketing efforts.</li>
          <li>Engage with clients, lawyers and prospects.</li>
          <li>
            Look for ways to create new business opportunities through
            relationships.
          </li>
          <li>Report to the Management Team.</li>
        </ul>

        <h5 className={classes.listTitle}>To Be Considered:</h5>
        <ul className={classes.list}>
          <li>
            Please email your resume and cover letter to careers@romanolaw.com.
          </li>
          <li>
            In your email, please use the subject line “Client Development
            Director.”
          </li>
          <li>
            In your cover letter, please tell us (a) your pay requirements, and
            (b) the oldest skyscraper in NYC.
          </li>
        </ul>

        <Typography variant='body1' gutterBottom>
          Your application will be considered ONLY if you have followed ALL the
          instructions above.
        </Typography>
      </section>
    </Container>
  )
}

export default JobListings
