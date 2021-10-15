import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NewsItem from '../components/NewsItem';
import aylienAPI from '../api/aylien';

class NewsList extends Component {
    state = {
        newsItems: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getNewsItems()
    }
    getNewsItems = async () => {
      const stories = await aylienAPI.listStories();
      this.setState({newsItems: []})
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getNewsItems()
    }
    render() {
        return (
            <div>
                { this.state.newsItems ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.newsItems.map(currentNews => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <NewsItem news={currentNews} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No news items found" }
            </div>
        )
    }
}
export default NewsList;
