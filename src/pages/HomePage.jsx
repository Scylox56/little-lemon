import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="container hero"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              color: "var(--text)",
              lineHeight: "1.2",
            }}
          >
            Welcome to Little Lemon
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted)",
              marginBottom: "2rem",
              maxWidth: "600px",
            }}
          >
            A family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/menu")}
              style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
            >
              View Menu
            </button>
            <button
              onClick={() => navigate("/booking")}
              type="button"
              style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/restaurant/600/500"
            alt="Little Lemon Restaurant"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "var(--shadow-lg)",
            }}
          />
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "3rem" }}>
        <div className="card">
          <h2
            style={{
              fontSize: "2.25rem",
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}
          >
            Our Story
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                Little Lemon was founded in 2010 by the Rossi family in the
                heart of Chicago. What started as a small family kitchen has
                grown into a beloved neighborhood restaurant known for our
                authentic Mediterranean cuisine.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                Our recipes have been passed down through generations, combining
                traditional cooking methods with fresh, locally-sourced
                ingredients. Each dish tells a story of our heritage and our
                commitment to quality.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--muted)",
                }}
              >
                Today, we continue to serve our community with the same passion
                and dedication that inspired our founders. Whether you're
                joining us for a casual lunch or a special celebration, you're
                part of the Little Lemon family.
              </p>
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/kitchen/500/400"
                alt="Our kitchen"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-md)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            marginBottom: "1.5rem",
            color: "var(--text)",
            textAlign: "center",
          }}
        >
          Why Choose Little Lemon?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🍋</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              Fresh Ingredients
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              We source the freshest local produce and finest imported
              Mediterranean ingredients for authentic flavors.
            </p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👨‍🍳</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              Expert Chefs
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Our talented culinary team brings decades of experience and
              passion to every dish they create.
            </p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏠</div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              Family Atmosphere
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Enjoy warm hospitality in a cozy setting perfect for families,
              friends, and special occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "4rem" }}>
        <div
          className="card"
          style={{
            background: "var(--bg-cream)",
            textAlign: "center",
            padding: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            Visit Us
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  color: "var(--text)",
                }}
              >
                📍 Location
              </h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                123 Lemon Street
                <br />
                Chicago, IL 60601
                <br />
                United States
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  color: "var(--text)",
                }}
              >
                ⏰ Hours
              </h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Monday - Friday: 11AM - 10PM
                <br />
                Saturday - Sunday: 10AM - 11PM
                <br />
                Closed on major holidays
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  color: "var(--text)",
                }}
              >
                📞 Contact
              </h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                Phone: (312) 555-LEMON
                <br />
                Email: info@littlelemon.com
                <br />
                Follow us @littlelemon
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/booking")}
            style={{
              marginTop: "2.5rem",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
            }}
          >
            Make a Reservation
          </button>
        </div>
      </section>
    </>
  );
}
