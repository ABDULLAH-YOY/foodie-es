import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-section">
            <h3>About Us</h3>
            <p>
            Foodie's offers a delightful selection of fresh and flavorful meals, prepared with care to satisfy your taste buds.
            </p>
        </div>
        <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: abdullahalnirob12.com</p>
            <p>Phone: 01889396315</p>
        </div>
        <div className="footer-section">
            <h3>Follow Us</h3>
            <a target='_blank' href="https://www.facebook.com/dev.abdullahalnirob/">Facebook</a>
            <a href='#'>Twitter</a>
            <a target='_blank' href="https://www.instagram.com/dev.abdullahalnirob/">Instagram</a>
        </div>
    </div>
    <div className="footer-bottom">
        &copy; 2024 Foodies's | Designed by Abdullah Al Nirob
    </div>
</footer>
  )
}

export default Footer