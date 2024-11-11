import React from 'react';

function TermsOfUse() {
    return (
        <div className='bg-black'>
            <div className="container text-light ">
                <h1>Terms of Use, Policies, and Disclaimers</h1>
                <p className='text-light fs-5'>
                    Your affirmative act of using our website located at{' '}
                    <a href="http://www.CryptoWatch.com">www.CryptoWatch.com</a> (and all associated
                    sites linked to it) or services ("CryptoWatch") signifies that you agree to the
                    following terms and conditions of use ("Terms of Use"). If you do not agree, do not
                    use CryptoWatch. CryptoWatch is the property of CryptoWatch Inc. ("us", "we" or
                    "our").
                </p>
                <div className="container">
                    <ul className="text-light fw-semibold fs-4">
                        <li><a href="#id_1" className='text-light text-decoration-none'>1. Changes to the Terms of Use</a></li>
                        <li><a href="#id_2" className='text-light text-decoration-none'>2. Changes to CryptoWatch</a></li>
                        <li><a href="#id_3" className='text-light text-decoration-none'>3. Ownership of Information; License to Use CryptoWatch; Redistribution of Data; Non-Display Usage</a></li>
                        <li><a href="#id_4" className='text-light text-decoration-none'>4. Attribution</a></li>
                        <li><a href="#id_5" className='text-light text-decoration-none'>5. User Accounts and Security</a></li>
                        <li><a href="#id_6" className='text-light text-decoration-none'>6. Prohibited Activities</a></li>
                    </ul>
                </div>

                <h1 id="id_1">1. Changes to the Terms of Use</h1>
                <p className='text-light'>
                    We may change these Terms of Use at any time, and it is your responsibility to
                    review them periodically for updates. If you continue to use CryptoWatch after we
                    post changes to these Terms of Use, you are signifying your acceptance of the new
                    terms, regardless of whether you have reviewed them. We strive to ensure that any
                    significant changes are communicated clearly, but we cannot guarantee that every
                    user will be informed directly. You will always have access to our Terms of Use
                    through our website, and it is advised to check them regularly to stay informed of
                    any modifications. By reloading this page, you will have the most up-to-date
                    version available to CryptoWatch users. Additionally, any material changes that
                    impact your rights or obligations will be highlighted to provide better clarity,
                    but continued use of the platform signifies your agreement to these adjustments.
                </p>

                <h1 id="id_2">2. Changes to CryptoWatch</h1>
                <p className='text-light'>
                    We may discontinue or change any service or feature on CryptoWatch at any time
                    without notice. This includes, but is not limited to, modifications to the user
                    interface, underlying algorithms, and data sources. These changes are part of our
                    ongoing effort to improve the platform and adapt to evolving market conditions and
                    technological advancements. However, such changes may result in the loss of
                    compatibility with older systems, applications, or third-party integrations. We do
                    not guarantee backward compatibility of our services and Application Programming
                    Interface (API) in this case. Users are encouraged to stay informed about updates
                    and ensure their implementations align with the latest version of our services.
                    Additionally, any updates or modifications may also affect the availability or
                    accuracy of certain data, and users are advised to review their reliance on
                    CryptoWatch for critical financial decisions.
                </p>

                <h1 id="id_3">3. Ownership of Information; License to Use CryptoWatch; Redistribution of Data; Non-Display Usage</h1>
                <p className='text-light'>
                    Unless otherwise noted, all rights, titles, and interests in CryptoWatch, and all
                    information made available through CryptoWatch or our services, in all languages,
                    formats, and media throughout the world, including, but not limited to, all
                    copyrights and trademarks therein, are the exclusive property of CryptoWatch, our
                    affiliates, or Data Providers, as defined in section 6 (disclaimer regarding
                    content) below. This includes any proprietary technology, algorithms, and
                    methodologies utilized by CryptoWatch to deliver our services. Unauthorized use,
                    reproduction, or distribution of any content or technology provided by CryptoWatch
                    is strictly prohibited.
                </p>

                <h1 id="id_4">4. Attribution</h1>
                <p className='text-light'>
                    CryptoWatch grants all users of t.com, and all other available versions of the
                    site, to use snapshots of CryptoWatch charts in analysis, press releases, books,
                    articles, blog posts and other publications. In addition, CryptoWatch grants the
                    use of all previously mentioned materials in education sessions, the display of
                    CryptoWatch charts during video broadcasts, which includes overviews, news,
                    analytics and otherwise use or promote CryptoWatch charts or any products from the
                    CryptoWatch website on the condition that CryptoWatch attribution is clearly
                    visible at all times when such charts and products are used.
                </p>

                <h1 id="id_5">5. User Accounts and Security</h1>
                <p className='text-light'>
                    To access certain features of CryptoWatch, you may be required to create an
                    account. You agree to provide accurate, current, and complete information during
                    the registration process and to update such information to keep it accurate,
                    current, and complete. You are responsible for maintaining the confidentiality of
                    your account credentials, including your username and password, and for any and
                    all activities that occur under your account. You agree to notify CryptoWatch
                    immediately of any unauthorized use of your account or any other breach of
                    security. CryptoWatch will not be liable for any loss or damage arising from your
                    failure to protect your account information.
                </p>

                <h1 id="id_6">6. Prohibited Activities</h1>
                <p className='text-light'>
                    You agree not to use CryptoWatch for any unlawful or prohibited activities.
                    Prohibited activities include, but are not limited to:
                </p>
                <ul className="text-light list-disc mb-0">
                    <li>Attempting to access or use another user's account without permission.</li>
                    <li>Engaging in any activity that could damage, disable, overburden, or impair the functionality of CryptoWatch.</li>
                    <li>Using any automated means (such as bots or scripts) to access or interact with CryptoWatch, unless expressly permitted by us.</li>
                    <li>Distributing or transmitting any viruses, malware, or other harmful software through CryptoWatch.</li>
                    <li>Engaging in any form of data mining, data scraping, or data harvesting from CryptoWatch without our express permission.</li>
                </ul>
            </div>
        </div>
    );
}

export default TermsOfUse;