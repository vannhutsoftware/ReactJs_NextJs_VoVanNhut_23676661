import { useState } from "react";
import kitchenBg from "../assets/Image 73.png";
import logoImg from "../assets/logo.png";
import avatarImg from "../assets/avatar.png";

// Ảnh cho This Summer Recipes
import italianTomato from "../assets/italian_style_tomato_salad.png";
import cucumberSalad from "../assets/cucumber_salad_charry_tomatoes.png";
import lotusSalad from "../assets/Lotus delight salad.png";
import potatoSalad from "../assets/Potato Salad.png";

// Ảnh cho Recipes With Videos
import cornSalad from "../assets/corn_salad.png";
import lotusSalad2 from "../assets/lotus_delight_salad.png";
import sunnySide from "../assets/Sunny-side up fried eggs.png";
import italianStyle from "../assets/Italian-style tomato.png";

// Ảnh cho Editor's pick
import lotusSalad01 from "../assets/Lotus delight salad_01.png";
import beanShrimp from "../assets/Bean, shrimp, and potato salad.png";
import vegSpaghetti from "../assets/Vegetable and shrimp spaghetti.png";
import snackCakes from "../assets/Snack cakes.png";

// Avatar Editor's pick
import fr1 from "../assets/Fr1.png";
import fr2 from "../assets/Fr2.png";
import fr3 from "../assets/Fr3.png";
import fr4 from "../assets/Fr4.png";

const PRIMARY = "#f44b86";
const BADGE = "#ffc416";

const BookmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="20" fill="rgba(0,0,0,0.4)" />
    <polygon points="16,12 30,20 16,28" fill="white" />
  </svg>
);

// ── Card nhỏ dùng cho Summer & Videos (ảnh trên, info dưới) ──
const summerRecipes = [
  { img: italianTomato, name: "Italian-style tomato salad",      time: "14 minutes" },
  { img: cucumberSalad, name: "Cucumber salad & cherry tomatoes", time: "15 minutes" },
  { img: lotusSalad,    name: "Lotus delight salad",              time: "20 minutes" },
  { img: potatoSalad,   name: "Potato Salad",                     time: "21 minutes" },
];

const videoRecipes = [
  { img: cornSalad,    name: "Corn salad",                 time: "32 minutes" },
  { img: lotusSalad2,  name: "Lotus delight salad",        time: "20 minutes" },
  { img: sunnySide,    name: "Sunny-side up fried eggs",   time: "15 minutes" },
  { img: italianStyle, name: "Italian-style tomato",       time: "20 minutes" },
];

// ── Editor's pick data ──
const editorPicks = [
  {
    img: lotusSalad01,
    name: "Lotus delight salad",
    time: "34 minutes",
    avatar: fr1,
    author: "Jennifer King",
    desc: "Lotus delight salad: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
  },
  {
    img: beanShrimp,
    name: "Bean, shrimp, and potato salad",
    time: "40 minutes",
    avatar: fr2,
    author: "Matthew Martinez",
    desc: "Savor the refreshing delight of a bean, shrimp and potato salad. Made with fresh ingredients, this creamy blend offers...",
  },
  {
    img: vegSpaghetti,
    name: "Vegetable and shrimp spaghetti",
    time: "19 minutes",
    avatar: fr3,
    author: "Sarah Hill",
    desc: "Vegetable and shrimp spaghetti is the skillful craft of creating captivating flavors on the surface of a dish...",
  },
  {
    img: snackCakes,
    name: "Snack cakes",
    time: "16 minutes",
    avatar: fr4,
    author: "Julia Lopez",
    desc: "Snack cakes: Savory cakes cooked in butter for a delicious and satisfying meal...",
  },
];

function SmallRecipeCard({ img, name, time, hasVideo }) {
  return (
    <div style={{
      background: "white", borderRadius: 12, overflow: "hidden",
      border: "1px solid #f0f0f0", boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
      flex: "1 1 0", minWidth: 0,
    }}>
      <div style={{ position: "relative", width: "100%", paddingTop: "68%", overflow: "hidden", background: "#f9f9f9" }}>
        <img src={img} alt={name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        {hasVideo && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PlayIcon />
          </div>
        )}
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#222", lineHeight: 1.4 }}>{name}</span>
          <div style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
            border: `1px solid ${PRIMARY}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <BookmarkIcon />
          </div>
        </div>
        <p style={{ fontSize: 11, color: PRIMARY, marginTop: 6, fontWeight: 500 }}>{time}</p>
      </div>
    </div>
  );
}

// ── Editor's pick card (ảnh trái, info phải) ──
function EditorCard({ img, name, time, avatar, author, desc }) {
  return (
    <div style={{
      background: "white", borderRadius: 14, overflow: "hidden",
      border: "1px solid #f0f0f0", boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      display: "flex", gap: 0, flex: "1 1 0", minWidth: 0,
    }}>
      {/* Ảnh món ăn bên trái */}
      <div style={{ width: 160, flexShrink: 0, position: "relative", overflow: "hidden", background: "#f5f5f5" }}>
        <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* Nội dung bên phải */}
      <div style={{ padding: "16px 16px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        {/* Tên món + bookmark */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3 }}>{name}</span>
          <div style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
            border: `1px solid ${PRIMARY}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <BookmarkIcon />
          </div>
        </div>

        {/* Thời gian */}
        <p style={{ fontSize: 11, color: "#aaa", fontWeight: 500 }}>{time}</p>

        {/* Avatar + tên tác giả */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "4px 0" }}>
          <img src={avatar} alt={author} style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#222" }}>{author}</span>
        </div>

        {/* Mô tả */}
        <p style={{ fontSize: 11.5, color: "#888", lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function CheffifyHomepage() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "white", width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}>

      {/* ── Navbar ── */}
      <nav style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: "10px 40px", background: "white",
        borderBottom: "1px solid #f0f0f0", width: "100%", boxSizing: "border-box",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img src={logoImg} alt="Chefify" style={{ height: 36, width: "auto", objectFit: "contain" }} />
        </a>

        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          border: "1px solid #ddd", borderRadius: 10,
          padding: "6px 14px", width: 260, flexShrink: 0, background: "#f3f4f6",
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          <input
            type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="What would you like to cook?"
            style={{ border: "none", outline: "none", fontSize: 12, color: "#999", width: "100%", background: "transparent" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24, flex: 1, justifyContent: "flex-end", marginRight: 8 }}>
          {["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"].map((item) => (
            <a key={item} href="#" style={{ fontSize: 13, color: "#333", textDecoration: "none", whiteSpace: "nowrap" }}>{item}</a>
          ))}
        </div>

        <button style={{ padding: "7px 20px", borderRadius: 10, flexShrink: 0, border: "none", background: "#fef0f5", color: PRIMARY, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Login</button>
        <button style={{ padding: "7px 20px", borderRadius: 10, flexShrink: 0, border: "none", background: PRIMARY, color: "white", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Subscribe</button>
      </nav>

      {/* ── Hero ── */}
      <div style={{
        position: "relative", width: "100%", height: "calc(100vh - 57px)", minHeight: 480,
        overflow: "hidden", backgroundImage: `url(${kitchenBg})`,
        backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#3a4a3c",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.18) 38%, rgba(0,0,0,0) 65%)" }} />
        <div style={{ position: "absolute", left: 48, top: "50%", transform: "translateY(-50%)", zIndex: 5 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: -1 }}>
            <span style={{ background: BADGE, color: "white", fontSize: 11, fontWeight: 600, padding: "5px 20px", borderRadius: "6px 6px 0 0", letterSpacing: "0.3px" }}>
              Recipe of the day
            </span>
          </div>
          <div style={{ background: "white", borderRadius: 12, padding: "20px 22px", width: 245, position: "relative" }}>
            <div style={{ position: "absolute", inset: 8, border: `1.5px dashed ${BADGE}`, borderRadius: 8, pointerEvents: "none" }} />
            <h2 style={{ fontSize: 17, fontWeight: 700, color: PRIMARY, textAlign: "center", margin: "4px 0 10px" }}>Salad Caprese</h2>
            <p style={{ fontSize: 11.5, color: "#666", textAlign: "center", lineHeight: 1.7 }}>
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, margin: "16px 0 12px" }}>
              <img src={avatarImg} alt="avatar" style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover", border: `2px solid ${PRIMARY}` }} />
              <span style={{ fontSize: 11.5, color: "#888" }}>Salad Caprese</span>
            </div>
            <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, margin: "0 auto", padding: "8px 24px", borderRadius: 20, background: PRIMARY, color: "white", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer" }}>
              View now →
            </button>
          </div>
        </div>
      </div>

      {/* ── This Summer Recipes ── */}
      <div style={{ padding: "48px 40px 40px", background: "white" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: PRIMARY, textAlign: "center", marginBottom: 8 }}>This Summer Recipes</h2>
        <p style={{ fontSize: 14, color: "#999", textAlign: "center", marginBottom: 32 }}>We have all your Independence Day sweets covered.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {summerRecipes.map((r) => <SmallRecipeCard key={r.name} img={r.img} name={r.name} time={r.time} hasVideo={false} />)}
        </div>
      </div>

      {/* ── Recipes With Videos ── */}
      <div style={{ padding: "16px 40px 56px", background: "white" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: PRIMARY, textAlign: "center", marginBottom: 8 }}>Recipes With Videos</h2>
        <p style={{ fontSize: 14, color: "#999", textAlign: "center", marginBottom: 32 }}>Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div style={{ display: "flex", gap: 20 }}>
          {videoRecipes.map((r) => <SmallRecipeCard key={r.name} img={r.img} name={r.name} time={r.time} hasVideo={true} />)}
        </div>
      </div>

      {/* ── Editor's pick ── */}
      <div style={{ padding: "16px 40px 64px", background: "white" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: PRIMARY, textAlign: "center", marginBottom: 8 }}>Editor's pick</h2>
        <p style={{ fontSize: 14, color: "#999", textAlign: "center", marginBottom: 32 }}>Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {editorPicks.map((r) => (
            <EditorCard key={r.name} img={r.img} name={r.name} time={r.time} avatar={r.avatar} author={r.author} desc={r.desc} />
          ))}
        </div>
      </div>

    </div>
  );
}
