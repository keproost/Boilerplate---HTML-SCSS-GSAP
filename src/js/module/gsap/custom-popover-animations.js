
// Based on codepen: https://codepen.io/osublake/pen/zMqevJ

import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js?module';

class ItemDetail {
    constructor(renderRoot) {
        this.renderRoot = renderRoot;
        this.render();
        this.scrim = this.renderRoot.querySelector('.scrim');
        this.image = this.renderRoot.querySelector('.image');
        this.content = this.renderRoot.querySelectorAll('.content');
    }

    close() {
        const a = this.currentItem.image.getBoundingClientRect();
        const b = this.image.getBoundingClientRect();

        const tl = new TimelineMax()
            .to([this.scrim, this.content], 0.2, {
                autoAlpha: 0,
            })
            .to(this.image, 0.3, {
                x: -(b.left - a.left),
                y: -(b.top - a.top),
                width: a.width,
                height: a.height,
                ease: Sine.easeOut
            }, 0)
            .set(this.image, {
                autoAlpha: 0
            })
            .set(this.currentItem.image, {
                autoAlpha: 1
            })
            .add(() => {
                this.currentItem = null;
                this.renderRoot.classList.remove('details--open');
            });
    }

    open(item) {
        if (this.currentItem) { return; }

        this.currentItem = item;
        this.render(item.props);

        this.image.style.cssText = '';

        const a = item.image.getBoundingClientRect();
        const b = this.image.getBoundingClientRect();

        const offset = [5, 10, 20];

        const tl = new TimelineMax()
            .set(this.content, {
                y: i => offset[i]
            })
            .set([item.image, this.content, this.scrim], {
                autoAlpha: 0
            })
            .set(this.image, {
                x: -(b.left - a.left),
                y: -(b.top - a.top),
                width: a.width,
                height: a.height
            })
            .to(this.scrim, 0.2, {
                autoAlpha: 1
            }, 0)
            .to(this.image, 0.3, {
                x: 0,
                y: 0,
                width: b.width,
                height: b.height,
                ease: Sine.easeOut
            }, 0)
            .staggerTo(this.content, 0.2, {
                autoAlpha: 1,
                y: 0
            }, 0.01, 0.2);

        this.renderRoot.classList.add('details--open');
    }

    render({ img = '', title, subtitle, description } = {}) {
        const template = html`
      <div class="scrim"></div>
      <button class="close" @click=${this.close}></button>
      <div class="details__inner">
        <img class="image details__img" src="${img}" alt=""/>
        <h2 class="content details__title">${title}</h2>
        <h3 class="content details__subtitle">${subtitle}</h3>
        <p class="content details__description">${description}</p>
      </div>
    `;

        render(template, this.renderRoot, { scopeName: 'item-detail', eventContext: this });
    }
}


class GridItem {
    constructor(renderRoot, props) {
        this.renderRoot = renderRoot;
        this.props = props;
        this.render(this.props);
        this.image = this.renderRoot.querySelector('.image');
    }

    render({ img, title, subtitle, description }) {
        const template = html`
      <div class="box" @click=${() => itemDetail.open(this)}>
        <div class="box__bg"></div>
          <img class="image box__img" src="${img}" />
        <h2 class="box__title">${title}</h2>
        <h3 class="box__subtitle">${subtitle}</h3>
        <p class="box__description">${description}</p>
      </div>
    `;

        render(template, this.renderRoot, { scopeName: 'grid-item', eventContext: this });
    }
}


const data = [
    {
        title: 'Example Title',
        subtitle: 'Subtitle',
        img: 'https://source.unsplash.com/random/500x750',
        description: 'Cillum et in nulla commodo. Ex sunt anim ut et voluptate sunt irure proident. Velit elit velit dolore amet deserunt enim dolore est sint esse.'
    },
    {
        title: 'A Different Title',
        subtitle: 'Subtitle',
        img: 'https://source.unsplash.com/random/400x450',
        description: 'Velit elit velit dolore amet deserunt enim dolore est sint esse. Cillum et in nulla commodo. Ex sunt anim ut et voluptate sunt irure proident.'
    },
    {
        title: 'A New Title',
        subtitle: 'Subtitle',
        img: 'https://source.unsplash.com/random/600x600',
        description: 'Ex sunt anim ut et voluptate sunt irure proident. Velit elit velit dolore amet deserunt enim dolore est sint esse. Cillum et in nulla commodo.'
    }
];

const itemRoots = document.querySelectorAll('.grid__item');
const detailsRoot = document.querySelector('.details');
const gridItems = data.map((props, i) => new GridItem(itemRoots[i], props));
const itemDetail = new ItemDetail(detailsRoot);
