class LearningPath {
  constructor({
    id,
    logo,
    name,
    teachers = [],
    blogposts = [],
    glosary = [],
    category,
    description,
    levels = [],
  }) {
    this.id = id;
    this.logo = logo;
    this.name = name;
    this.teachers = teachers;
    this.blogposts = blogposts;
    this.glosary = glosary;
    this.category = category;
    this.description = description;
    this.levels = levels;
  }

  addCourse(level, nameCourse) {
    if (!this.levels[level]) {
      this.levels[level] = [];
    }
    this.levels[level].push(nameCourse);
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  addBlog(blog) {
    this.blogposts.push(blog);
  }

  addConcept(concept) {
    this.glosary.push(concept);
  }
}

const publicidad = new LearningPath({
  id: "publicidad",
  logo: "",
  name: "Escuela de Publicidad Digital",
  teachers: "",
  blogposts: [],
  glosary: [],
  category: "",
  description:
    "Te enseñaremos a crear campañas de publicidad online de alto impacto en redes como Facebook Ads y Google Ads mientras aprendes de optimización y estrategia",
});

publicidad.addCourse("basico", [
  "marca-personal",
  "publicidad-digital",
  "introduccion-marketing",
  "excel",
  "contenidos-digitales",
  "marketing-navidad",
]);
publicidad.addCourse("intermedio", [
  "google-analytics",
  "fb-analytics",
  "growth-marketing",
  "campanas-digitales",
  "facebook-ads",
  "google-adwords",
  "twitter-ads",
  "desbloquea-creatividad",
  "copywriting-digital",
  "psicologia-consumidor",
  "instagram",
]);
publicidad.addCourse("avanzado", [
  "data-studio",
  "programmatic",
  "coolhunting",
  "liderazgo-empresarial",
  "movil",
  "marketing-videojuegos",
  "bi-excel",
  "power-bi",
]);

console.log(publicidad);
