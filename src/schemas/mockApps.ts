import { WireframeSchema } from './WireframeSchema';

export const socialAppSchema: WireframeSchema = {
  screens: [
    {
      id: 'feed',
      name: 'Feed',
      elements: [
        {
          type: 'header',
          id: 'feedHeader',
          title: 'Social Feed'
        },
        {
          type: 'tabs',
          id: 'feedTabs',
          tabs: ['For You', 'Following', 'Trending'],
          defaultActiveTab: 0
        },
        {
          type: 'list',
          id: 'postsList',
          items: [
            {
              id: 'post1',
              text: 'Just launched my new project! 🚀',
              subtitle: '@johndoe • 2h ago',
              rightText: '24 likes',
              image: 'project-image.jpg',
              target: 'postDetail'
            },
            {
              id: 'post2',
              text: 'Beautiful sunset at the beach',
              subtitle: '@jane_smith • 5h ago',
              rightText: '156 likes',
              image: 'sunset.jpg'
            }
          ]
        },
        {
          type: 'navBar',
          id: 'mainNav',
          buttons: [
            { label: 'Home', target: 'feed' },
            { label: 'Search', target: 'search' },
            { label: 'New Post', target: 'newPost' },
            { label: 'Profile', target: 'profile' }
          ]
        }
      ]
    }
  ]
};

export const ecommerceAppSchema: WireframeSchema = {
  screens: [
    {
      id: 'shop',
      name: 'Shop',
      elements: [
        {
          type: 'header',
          id: 'shopHeader',
          title: 'Shop',
          hasAddButton: true,
          addButtonTarget: 'cart'
        },
        {
          type: 'searchBar',
          id: 'productSearch',
          placeholder: 'Search products...'
        },
        {
          type: 'tabs',
          id: 'categoryTabs',
          tabs: ['All', 'Electronics', 'Fashion', 'Home'],
          defaultActiveTab: 0
        },
        {
          type: 'list',
          id: 'productList',
          items: [
            {
              id: 'product1',
              text: 'Wireless Headphones',
              subtitle: '$99.99',
              rightText: '⭐ 4.5',
              image: 'headphones.jpg',
              target: 'productDetail'
            },
            {
              id: 'product2',
              text: 'Smart Watch',
              subtitle: '$199.99',
              rightText: '⭐ 4.8',
              image: 'smartwatch.jpg',
              target: 'productDetail'
            }
          ]
        },
        {
          type: 'navBar',
          id: 'shopNav',
          buttons: [
            { label: 'Shop', target: 'shop' },
            { label: 'Categories', target: 'categories' },
            { label: 'Cart', target: 'cart' },
            { label: 'Account', target: 'account' }
          ]
        }
      ]
    }
  ]
};

export const newsAppSchema: WireframeSchema = {
  screens: [
    {
      id: 'news',
      name: 'News',
      elements: [
        {
          type: 'header',
          id: 'newsHeader',
          title: 'Daily News'
        },
        {
          type: 'tabs',
          id: 'newsTabs',
          tabs: ['Latest', 'Technology', 'Business', 'Sports'],
          defaultActiveTab: 0
        },
        {
          type: 'card',
          id: 'featuredNews',
          title: 'Breaking News',
          subtitle: '2 hours ago',
          content: 'Major technological breakthrough in renewable energy',
          image: 'news-cover.jpg',
          target: 'articleDetail'
        },
        {
          type: 'list',
          id: 'newsList',
          items: [
            {
              id: 'article1',
              text: 'Stock Market Reaches New Heights',
              subtitle: 'Financial News • 1h ago',
              rightText: '📈',
              target: 'articleDetail'
            },
            {
              id: 'article2',
              text: 'New Sports League Announced',
              subtitle: 'Sports • 3h ago',
              rightText: '🏆',
              target: 'articleDetail'
            }
          ]
        },
        {
          type: 'navBar',
          id: 'newsNav',
          buttons: [
            { label: 'Home', target: 'news' },
            { label: 'Search', target: 'search' },
            { label: 'Saved', target: 'saved' },
            { label: 'Settings', target: 'settings' }
          ]
        }
      ]
    }
  ]
};

export const weatherAppSchema: WireframeSchema = {
  screens: [
    {
      id: 'weather',
      name: 'Weather',
      elements: [
        {
          type: 'header',
          id: 'weatherHeader',
          title: 'Weather'
        },
        {
          type: 'textBlock',
          id: 'location',
          content: 'New York, NY',
          variant: 'title',
          alignment: 'center'
        },
        {
          type: 'textBlock',
          id: 'temperature',
          content: '72°F',
          variant: 'title',
          alignment: 'center'
        },
        {
          type: 'textBlock',
          id: 'condition',
          content: 'Partly Cloudy',
          variant: 'subtitle',
          alignment: 'center'
        },
        {
          type: 'tabs',
          id: 'forecastTabs',
          tabs: ['Hourly', 'Daily'],
          defaultActiveTab: 0
        },
        {
          type: 'list',
          id: 'hourlyForecast',
          items: [
            {
              id: 'hour1',
              text: 'Now',
              rightText: '72°F',
              subtitle: '🌤️'
            },
            {
              id: 'hour2',
              text: '2 PM',
              rightText: '75°F',
              subtitle: '☀️'
            },
            {
              id: 'hour3',
              text: '3 PM',
              rightText: '74°F',
              subtitle: '⛅'
            }
          ]
        }
      ]
    }
  ]
};
