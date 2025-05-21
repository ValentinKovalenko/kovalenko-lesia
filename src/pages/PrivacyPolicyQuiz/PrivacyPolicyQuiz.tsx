import React from 'react';
import './privacyPolicyQuiz.css'

const PrivacyPolicyQuiz = () => {
    return (
        <div className='privacy-container-quiz'>
            <h1>Privacy Policy and Terms of Use</h1>
            <p><strong>Last updated:</strong> May 21, 2025</p>
            <p>Thank you for choosing to play our quiz game available on the Aptoide platform. Your privacy and trust
                are very important to us. This document explains how we handle your data and the terms under which you
                may use our game.</p>
            <h2>Privacy Policy</h2>
            <h3>1. Information We Collect</h3>
            <p>We may collect and process the following types of information:</p>
            <ul>
                <li><strong>Unique Device Identifier (deviceId)</strong>: this identifier is used to save your game
                    progress. It is not personally identifiable and does not allow us to identify you as an individual.
                    We do not use the deviceId for any other purposes except for improving the gaming experience.
                </li>
                <li><strong>Selected Language</strong>: we store information about the language you choose in order to
                    personalize your gaming experience.
                </li>
                <li><strong>Nickname</strong>: You may choose a nickname for your game profile. The nickname may contain
                    any information you wish to provide. We store this nickname to personalize your gaming experience.
                    If you provide a nickname that contains personal information, such as your real name or other
                    identifiable details, you are responsible for the data you provide.
                </li>
                <li><strong>Gameplay Data</strong> (such as answers submitted and scores achieved)</li>
            </ul>
            <p>We do <strong>not</strong> collect personal information such as your name, email, or address unless you
                voluntarily provide it.</p>
            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul>
                <li>Provide, maintain, and improve the game experience</li>
                <li>Personalize gameplay based on your language settings</li>
                <li>Analyze aggregated gameplay statistics to enhance content quality</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or share your information with third parties, except as required
                by law.</p>
            <h3>3. Data Security</h3>
            <p>We implement industry-standard security measures to protect your data from unauthorized access,
                alteration, or disclosure. All data is used strictly for internal purposes.</p>
            <h3>4. Children's Privacy</h3>
            <p>Our game is intended for general audiences and does not knowingly collect personal information from
                children under the age of 13. If you believe a child has provided us with personal data, please contact
                us immediately.</p>
            <h3>5. User Rights</h3>
            <p>You have the right to:</p>
            <ul>
                <li>Request access to the information we collect</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing (where applicable)</li>
            </ul>
            <p>To exercise your rights, please contact us at <a
                href="mailto:kovalenko.l.v.fop@gmail.com">kovalenko.l.v.fop@gmail.com</a></p>
            <h3>6. International Data Transfers</h3>
            <p>If you are accessing the game from outside our operating country, please be aware that your information
                may be transferred to, stored, and processed in countries where our servers or third-party services are
                located.</p>
            <h2>Terms of Use</h2>
            <h3>1. Use of the Game</h3>
            <p>The game is provided for your personal, non-commercial use. You agree not to:</p>
            <ul>
                <li>Copy, modify, distribute, or reverse-engineer the game</li>
                <li>Use the game for unlawful or unauthorized purposes</li>
                <li>Interfere with the game's operation or attempt to access its source code</li>
            </ul>
            <h3>2. Intellectual Property</h3>
            <p>All content within the game, including questions, design, images, and software logic, is the exclusive
                property of the developers. You may not reuse or redistribute any part without explicit written
                permission.</p>
            <p>Some images used in the game are sourced from <a
                href="https://www.pexels.com/" target="_blank"
                rel="noopener noreferrer">Pexels.com</a> and are used in accordance with the Pexels
                License, which allows free commercial use without attribution.</p>
            <h3>3. No Guarantee of Accuracy</h3>
            <p>While we strive for accuracy, the quiz questions are based on widely accepted sources. We cannot
                guarantee absolute correctness and are not responsible for discrepancies between our content and
                external information sources.</p>
            <h3>4. Limitation of Liability</h3>
            <p>You agree that we are not liable for:</p>
            <ul>
                <li>Any decisions made based on the quiz results</li>
                <li>Errors, inaccuracies, or omissions in the game</li>
                <li>Technical failures, data loss, or any damage resulting from the use of the game</li>
            </ul>
            <h3>5. Updates and Modifications</h3>
            <p>We may update the Privacy Policy and Terms of Use from time to time. Changes will be published within the
                app or on the Aptoide platform. Continued use of the game means acceptance of any updated terms.</p>
            <h3>6. Contact Us</h3>
            <p>If you have questions about this Privacy Policy or Terms of Use, please contact us at: <a
                href="mailto:kovalenko.l.v.fop@gmail.com">kovalenko.l.v.fop@gmail.com</a></p>
            <p><strong>Thank you for playing and trusting us!</strong></p>
        </div>
    );
};

export default PrivacyPolicyQuiz;
