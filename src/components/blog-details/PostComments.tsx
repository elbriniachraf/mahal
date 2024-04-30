import React from 'react';
import Author1 from '../../../public/assets/img/blog/comments1.png';
import Author2 from '../../../public/assets/img/blog/comments2.png';
import Author3 from '../../../public/assets/img/blog/comments1.png';
import Image from 'next/image';
import Link from 'next/link';

const PostComments = () => {
    return (
        <>
            <div className="post-comments">
                <div className="blog-coment-title mb-30">
                    <h2>03 Comments</h2>
                </div>
                <div className="latest-comments">
                    <ul>
                        <li>
                            <div className="comments-box">
                                <div className="comments-avatar">
                                    <Image src={Author1} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="comments-text">
                                    <div className="avatar-name">
                                        <h5>Karon Balina</h5>
                                        <span>19th Apr 2023</span>
                                        <Link className="reply" href="#"><i className="fas fa-reply"></i>Reply</Link>
                                    </div>
                                    <p>Karon, your reflection on various medical aspects is truly thought-provoking. {`It's`} commendable how {`you've`} delved into the complexities of healthcare, addressing the importance of advancements in medical research, technology, and patient care. Your perspective adds valuable insights to the ongoing dialogue about the future of healthcare. Looking forward to more of your contributions!</p>
                                </div>
                            </div>
                        </li>
                        <li className="children">
                            <div className="comments-box">
                                <div className="comments-avatar">
                                    <Image src={Author2} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="comments-text">
                                    <div className="avatar-name">
                                        <h5>Julias Roy</h5>
                                        <span>19th May 2023</span>
                                        <Link className="reply" href="#"><i className="fas fa-reply"></i>Reply</Link>
                                    </div>
                                    <p>Julias, your insights into the realm of medical equipment are truly enlightening! {`It's`} crucial to understand the diverse range of tools and technologies available in the healthcare sector. Your mention of cutting-edge equipment and their impact on patient care sheds light on the continuous advancements in the field. Looking forward to more discussions on the future of medical technology!</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="comments-box">
                                <div className="comments-avatar">
                                    <Image src={Author3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="comments-text">
                                    <div className="avatar-name">
                                        <h5>Arista Williamson</h5>
                                        <span>19th Jun 2023</span>
                                        <Link className="reply" href="#"><i className="fas fa-reply"></i>Reply</Link>
                                    </div>
                                    <p>What an insightful perspective, Arista! Your eloquent expression of ideas truly adds depth to the ongoing conversation. {`It's`} fascinating to see discussions like these contributing to our collective understanding. Looking forward to more of your thoughts!</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PostComments;